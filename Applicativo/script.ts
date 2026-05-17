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

const form = document.getElementById('booking-form') as HTMLFormElement | null;
const resultMessage = document.getElementById('result-message') as HTMLDivElement | null;

const MAX_TICKETS = 5;
const MIN_AGE_STANDARD = 16;
const MIN_AGE_VIP = 18;

if (form) {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        const nameInput = document.getElementById('name') as HTMLInputElement | null;
        const ageInput = document.getElementById('age') as HTMLInputElement | null;
        const ticketsInput = document.getElementById('tickets') as HTMLInputElement | null;
        const typeSelect = document.getElementById('type') as HTMLSelectElement | null;

        if (nameInput && ageInput && ticketsInput && typeSelect) {
            const formData: BookingData = {
                name: nameInput.value.trim(),
                age: parseInt(ageInput.value, 10),
                tickets: parseInt(ticketsInput.value, 10),
                type: typeSelect.value
            };

            submitBooking(formData);
        }
    });
}

function submitBooking(data: BookingData): void {
    showResult('Elaborazione prenotazione...', 'info');

    const result = processBooking(data);

    if (result.success) {
        showResult(result.message, 'success');
        if (form) {
            form.reset();
        }
    } else {
        showResult(result.message, 'error');
    }
}

function processBooking(bookingData: BookingData): BookingResponse {
    if (!bookingData.name) {
        return {
            success: false,
            message: 'Il nome non può essere vuoto.',
            data: bookingData
        };
    }

    if (containsNumbers(bookingData.name)) {
        return {
            success: false,
            message: 'Il nome non può contenere numeri.',
            data: bookingData
        };
    }

    if (!Number.isFinite(bookingData.age) || bookingData.age <= 0) {
        return {
            success: false,
            message: 'Inserisci un\'età valida.',
            data: bookingData
        };
    }

    if (!Number.isFinite(bookingData.tickets) || bookingData.tickets < 1 || bookingData.tickets > MAX_TICKETS) {
        return {
            success: false,
            message: `Numero biglietti non valido. Massimo ${MAX_TICKETS} biglietti.`,
            data: bookingData
        };
    }

    const ageError = validateAge(bookingData);
    if (ageError) {
        return {
            success: false,
            message: ageError,
            data: bookingData
        };
    }

    return {
        success: true,
        message: buildSuccessMessage(bookingData),
        data: bookingData
    };
}

function containsNumbers(text: string): boolean {
    return /\d/.test(text);
}

function validateAge(bookingData: BookingData): string | null {
    if (bookingData.type === 'vip' && bookingData.age < MIN_AGE_VIP) {
        return `Età non sufficiente per l'ingresso VIP (minimo ${MIN_AGE_VIP} anni).`;
    }

    if (bookingData.type === 'standard' && bookingData.age < MIN_AGE_STANDARD) {
        return `Età non sufficiente per l'ingresso standard (minimo ${MIN_AGE_STANDARD} anni).`;
    }

    return null;
}

function buildSuccessMessage(bookingData: BookingData): string {
    const ticketTypeLabel = bookingData.type === 'vip' ? 'VIP' : 'Standard';
    const quantityLabel = bookingData.tickets === 1 ? 'un biglietto' : `${bookingData.tickets} biglietti`;
    return `Grazie ${bookingData.name}! Prenotazione confermata per ${quantityLabel} ${ticketTypeLabel}.`;
}

function showResult(message: string, type: 'error' | 'success' | 'info'): void {
    if (!resultMessage) {
        return;
    }

    resultMessage.textContent = message;
    resultMessage.className = `message ${type}`;
    resultMessage.classList.remove('hidden');
}
