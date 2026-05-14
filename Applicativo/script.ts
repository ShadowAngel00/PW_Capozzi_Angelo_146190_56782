// Configurazione del server
export {}; // Rende il file un modulo per evitare conflitti di nomi con script.js

const API_URL: string = 'http://localhost:8080/api/booking';

interface BookingData {
    name: string;
    age: number;
    tickets: number;
    type: string;
}

interface BookingResponse {
    success: boolean;
    message: string;
    data: BookingData;
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

            submitBooking(formData);
        }
    });
}

/**
 * Invia la prenotazione al server backend
 */
async function submitBooking(data: BookingData): Promise<void> {
    try {
        showResult('Elaborazione prenotazione...', 'info');
        
        const response = await fetch(`${API_URL}/confirm`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result: BookingResponse = await response.json();

        if (result.success) {
            showResult(result.message, 'success');
            if (form) {
                form.reset();
            }
        } else {
            showResult(result.message, 'error');
        }
    } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'Errore sconosciuto';
        showResult(`Errore di connessione al server: ${errorMsg}`, 'error');
        console.error('Errore nella richiesta:', error);
    }
}

function showResult(message: string, type: 'error' | 'success' | 'info'): void {
    if (resultMessage) {
        resultMessage.textContent = message;
        resultMessage.className = `message ${type}`;
        resultMessage.classList.remove('hidden');
    }
}
