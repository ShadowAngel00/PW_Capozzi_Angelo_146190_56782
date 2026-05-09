# Documento Architetturale dell'Applicativo Booking

## 1. Descrizione Funzionale

L'applicativo gestisce la prenotazione dei biglietti per il festival Neon Pulse.

## 2. Tecnologie Utilizzate

- **TypeScript (applicativo/script.ts)**: Codice sorgente con tipizzazione statica per una maggiore sicurezza.
- **JavaScript (applicativo/script.js)**: Versione compilata eseguita dal browser.
- **HTML5/CSS3 (applicativo/prenotazione.html)**: Interfaccia utente interattiva e stilizzata.

## 3. Logica di Business

- **Validazione Età**: 
  - Standard: Minimo 16 anni.
  - VIP: Minimo 18 anni.
- **Limite Biglietti**: Massimo 5 biglietti per utente.
- **Feedback**: Messaggi dinamici di successo o errore basati sulla validazione.

## 4. Struttura del Codice

- Interfaccia `BookingData` per la coerenza dei dati.
- Funzione `processBooking` per il calcolo della validità.
- Funzione `showResult` per l'aggiornamento dinamico del DOM.
