const MAX_TICKETS = 5;
const MIN_AGE_STANDARD = 16;
const MIN_AGE_VIP = 18;

const form = document.getElementById('booking-form');
const resultMessage = document.getElementById('result-message');

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const ageInput = document.getElementById('age');
        const ticketsInput = document.getElementById('tickets');
        const typeSelect = document.getElementById('type');

        const formData = {
            name: nameInput.value,
            age: parseInt(ageInput.value),
            tickets: parseInt(ticketsInput.value),
            type: typeSelect.value
        };

        processBooking(formData);
    });
}

function processBooking(data) {
    let errorMessage = '';

    if (data.type === 'vip' && data.age < MIN_AGE_VIP) {
        errorMessage = `Età non sufficiente per l'ingresso VIP (minimo ${MIN_AGE_VIP} anni)`;
    } else if (data.type === 'standard' && data.age < MIN_AGE_STANDARD) {
        errorMessage = `Età non sufficiente (minimo ${MIN_AGE_STANDARD} anni)`;
    }

    if (!errorMessage && (data.tickets <= 0 || data.tickets > MAX_TICKETS)) {
        errorMessage = `Numero biglietti non valido (massimo ${MAX_TICKETS} per persona)`;
    }

    if (errorMessage) {
        showResult(errorMessage, 'error');
    } else {
        const successText = `Grazie ${data.name}! Prenotazione confermata per ${data.tickets} biglietto/i ${data.type.toUpperCase()}.`;
        showResult(successText, 'success');
        form.reset();
    }
}

function showResult(message, type) {
    if (resultMessage) {
        resultMessage.textContent = message;
        resultMessage.className = `message ${type}`;
        resultMessage.classList.remove('hidden');
    }
}
