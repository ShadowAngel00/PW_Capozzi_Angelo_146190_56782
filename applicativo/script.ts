// Definizione dei limiti e delle regole
export {}; // Rende il file un modulo per evitare conflitti di nomi con script.js

const MAX_TICKETS: number = 5;
const MIN_AGE_STANDARD: number = 16;
const MIN_AGE_VIP: number = 18;

interface BookingData {
    name: string;
    age: number;
    tickets: number;
    type: string;
}

// Selezioniamo gli elementi del DOM
const form = document.getElementById('booking-form') as HTMLFormElement | null;
const resultMessage = document.getElementById('result-message') as HTMLDivElement | null;

if (form) {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        // Recupero dei dati dal form
        const nameInput = document.getElementById('name') as HTMLInputElement | null;
        const ageInput = document.getElementById('age') as HTMLInputElement | null;
        const ticketsInput = document.getElementById('tickets') as HTMLInputElement | null;
        const typeSelect = document.getElementById('type') as HTMLSelectElement | null;

        if (nameInput && ageInput && ticketsInput && typeSelect) {
            const formData: BookingData = {
                name: nameInput.value,
                age: parseInt(ageInput.value),
                tickets: parseInt(ticketsInput.value),
                type: typeSelect.value
            };

            processBooking(formData);
        }
    });
}

function processBooking(data: BookingData): void {
    let errorMessage: string = '';

    // 0. Controllo Nome (non deve contenere numeri)
    const nameRegex = /\d/;
    if (nameRegex.test(data.name)) {
        errorMessage = 'Il nome non può contenere numeri';
    }

    // 1. Controllo Età
    if (!errorMessage && data.type === 'vip' && data.age < MIN_AGE_VIP) {
        errorMessage = `Età non sufficiente per l'ingresso VIP (minimo ${MIN_AGE_VIP} anni)`;
    } else if (data.type === 'standard' && data.age < MIN_AGE_STANDARD) {
        errorMessage = `Età non sufficiente (minimo ${MIN_AGE_STANDARD} anni)`;
    }

    // 2. Controllo Numero Biglietti
    if (!errorMessage && (data.tickets <= 0 || data.tickets > MAX_TICKETS)) {
        errorMessage = `Numero biglietti non valido (massimo ${MAX_TICKETS} per persona)`;
    }

    // Output Risultati
    if (errorMessage) {
        showResult(errorMessage, 'error');
    } else {
        // Logica dinamica per singolare/plurale e tipo di biglietto
        const ticketTypeLabel = data.type === 'vip' ? 'VIP' : 'Standard';
        const quantityLabel = data.tickets === 1 ? 'un biglietto' : `i ${data.tickets} biglietti`;
        
        const successText: string = `Grazie ${data.name}! Prenotazione confermata per ${quantityLabel} ${ticketTypeLabel}.`;
        
        showResult(successText, 'success');
        if (form) {
            form.reset();
        }
    }
}

function showResult(message: string, type: 'error' | 'success'): void {
    if (resultMessage) {
        resultMessage.textContent = message;
        resultMessage.className = `message ${type}`;
        resultMessage.classList.remove('hidden');
    }
}
