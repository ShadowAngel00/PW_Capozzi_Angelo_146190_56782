# Neon Pulse Festival 2026

Progetto integrato del festival Neon Pulse, che include il sito web informativo e l'applicativo di prenotazione biglietti.

## Struttura del Progetto
- `index.html`: Pagina principale (Home).
- `eventi.html`: Programma del festival.
- `info.html`: Informazioni utili e location.
- `gallery.html`: Galleria fotografica delle edizioni passate.
- `registrazione.html`: Pagina di atterraggio per la prenotazione.
- `prenotazione.html`: Applicativo TypeScript per l'acquisto biglietti.
- `booking.ts`: Logica di business per la prenotazione (TypeScript).
- `style/`: Cartella contenente i fogli di stile CSS.

## Funzionalità Applicativo Prenotazione
- Registrazione nome utente.
- Controllo età dinamico:
  - **Standard**: minimo 16 anni.
  - **VIP**: minimo 18 anni.
- Limite massimo di 5 biglietti per transazione.
- Feedback immediato all'utente.

## Requisiti Tecnici
- **TypeScript**: Utilizzato per la logica di prenotazione.
- **Vite**: Strumento di build e server di sviluppo.

## Come Avviare
1. Assicurati di avere Node.js installato.
2. Esegui `npm install` per installare le dipendenze (se non già presenti).
3. Esegui `npm run dev` per avviare il server di sviluppo.
4. Apri l'indirizzo mostrato nel terminale (solitamente `http://localhost:5173`).

## Documentazione
Per approfondimenti tecnici, consulta:
- `DOCUMENTO_ARCHITETTURALE_APP.md`
- `DOCUMENTO_ARCHITETTURALE_SITO.md`
