// Configurazione del server
const API_URL: string = '/api/booking';

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
        
        // Usa URL relativo per evitare problemi di origin
        const apiUrl = `${API_URL}/confirm`;
        console.log(`Invio richiesta a: ${apiUrl}`, data);
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        console.log(`Risposta ricevuta (Stato: ${response.status})`);
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: 'Errore risposta server' }));
            throw new Error(errorData.message || `Errore server: ${response.status}`);
        }

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
