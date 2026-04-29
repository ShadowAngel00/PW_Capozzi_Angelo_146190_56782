// Definizione dei limiti e delle regole
const MAX_TICKETS = 5;
const MIN_AGE_STANDARD = 16;
const MIN_AGE_VIP = 18;

interface BookingData {
    name: string;
    age: number;
    tickets: number;
    type: string;
}

// Selezioniamo gli elementi del DOM
const form = document.getElementById('booking-form') as HTMLFormElement;
const resultMessage = document.getElementById('result-message') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Reset messaggi precedenti
    resultMessage.classList.add('hidden');
    resultMessage.className = 'message';

    // Recupero dei dati dal form
    const formData: BookingData = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        age: parseInt((document.getElementById('age') as HTMLInputElement).value),
        tickets: parseInt((document.getElementById('tickets') as HTMLInputElement).value),
        type: (document.getElementById('type') as HTMLSelectElement).value
    };

    // Validazione logica
    let errorMessage = '';

    // 1. Controllo Età
    if (formData.type === 'vip' && formData.age < MIN_AGE_VIP) {
        errorMessage = 'Età non sufficiente per l\'ingresso VIP (minimo 18 anni)';
    } else if (formData.type === 'standard' && formData.age < MIN_AGE_STANDARD) {
        errorMessage = 'Età non sufficiente (minimo 16 anni)';
    }

    // 2. Controllo Numero Biglietti (se non già bloccato dall'età)
    if (!errorMessage && formData.tickets > MAX_TICKETS) {
        errorMessage = 'Numero massimo superato (massimo 5 biglietti per persona)';
    }

    // Output Risultati
    if (errorMessage) {
        showResult(errorMessage, 'error');
    } else {
        const successText = `Grazie ${formData.name}! Prenotazione confermata per ${formData.tickets} biglietto/i ${formData.type.toUpperCase()}.`;
        showResult(successText, 'success');
        form.reset();
    }
});

function showResult(message: string, type: 'error' | 'success') {
    resultMessage.textContent = message;
    resultMessage.classList.add(type);
    resultMessage.classList.remove('hidden');
}
