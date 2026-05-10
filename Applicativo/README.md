# Applicativo di Prenotazione - Neon Pulse Festival

Questo modulo gestisce la logica interattiva per la prenotazione dei biglietti del festival. È sviluppato utilizzando **TypeScript** per garantire robustezza e sicurezza dei dati.

## 🚀 Funzionalità

- **Validazione Nome**: Impedisce l'inserimento di caratteri numerici.
- **Controllo Età Dinamico**:
  - Biglietto **Standard**: Minimo 16 anni.
  - Biglietto **VIP**: Minimo 18 anni.
- **Limite Biglietti**: Massimo 5 biglietti per singola operazione.
- **Messaggi Personalizzati**: Feedback dinamico in base al tipo di biglietto e alla quantità (singolare/plurale).

## 📂 Struttura del Modulo

- **[prenotazione.html](prenotazione.html)**: L'interfaccia utente del form.
- **[script.ts](script.ts)**: Il codice sorgente logico in TypeScript.
- **[script.js](script.js)**: Il file compilato pronto per il browser.
- **[DOCUMENTO_ARCHITETTURALE_APP.md](DOCUMENTO_ARCHITETTURALE_APP.md)**: Documentazione tecnica dettagliata.

## 🛠️ Tecnologie

- **TypeScript**: Linguaggio principale per la logica di business.
- **HTML5/CSS3**: Struttura e stile (collegato al framework globale in `Sito_Web/style/`).

---
*Parte integrante del Project Work - Neon Pulse Festival 2027.*
