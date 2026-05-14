/**
 * Servizio di logica di business per le prenotazioni
 */

const MAX_TICKETS = 5;
const MIN_AGE_STANDARD = 16;
const MIN_AGE_VIP = 18;

/**
 * Processa una richiesta di prenotazione e valida i dati
 * @param {Object} bookingData - Dati della prenotazione {name, age, tickets, type}
 * @returns {Object} Risposta con successo, messaggio e dati
 */
function processBooking(bookingData) {
    // Validazione Nome (non deve contenere numeri)
    if (containsNumbers(bookingData.name)) {
        return {
            success: false,
            message: 'Il nome non può contenere numeri',
            data: bookingData
        };
    }

    // Validazione Età
    const ageError = validateAge(bookingData);
    if (ageError) {
        return {
            success: false,
            message: ageError,
            data: bookingData
        };
    }

    // Validazione Numero Biglietti
    if (bookingData.tickets <= 0 || bookingData.tickets > MAX_TICKETS) {
        return {
            success: false,
            message: `Numero biglietti non valido (massimo ${MAX_TICKETS} per persona)`,
            data: bookingData
        };
    }

    // Prenotazione confermata
    const successMessage = buildSuccessMessage(bookingData);
    return {
        success: true,
        message: successMessage,
        data: bookingData
    };
}

/**
 * Verifica se una stringa contiene numeri
 */
function containsNumbers(text) {
    return /\d/.test(text);
}

/**
 * Valida l'età in base al tipo di biglietto
 */
function validateAge(bookingData) {
    if (bookingData.type === 'vip' && bookingData.age < MIN_AGE_VIP) {
        return `Età non sufficiente per l'ingresso VIP (minimo ${MIN_AGE_VIP} anni)`;
    }
    if (bookingData.type === 'standard' && bookingData.age < MIN_AGE_STANDARD) {
        return `Età non sufficiente (minimo ${MIN_AGE_STANDARD} anni)`;
    }
    return null;
}

/**
 * Costruisce il messaggio di successo con grammatica corretta (singolare/plurale)
 */
function buildSuccessMessage(bookingData) {
    const ticketTypeLabel = bookingData.type === 'vip' ? 'VIP' : 'Standard';
    const quantityLabel = bookingData.tickets === 1 
        ? 'un biglietto' 
        : `i ${bookingData.tickets} biglietti`;
    return `Grazie ${bookingData.name}! Prenotazione confermata per ${quantityLabel} ${ticketTypeLabel}.`;
}

module.exports = {
    processBooking
};
