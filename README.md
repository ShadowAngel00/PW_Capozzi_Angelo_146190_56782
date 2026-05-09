# Neon Pulse Festival 2026 - Official Project

Benvenuti nel repository ufficiale del **Neon Pulse Festival 2026**, un progetto web integrato che combina un sito informativo moderno con un applicativo di prenotazione biglietti dinamico.

## 📁 Struttura del Progetto

Il progetto è organizzato per separare chiaramente i contenuti informativi dalla logica applicativa:

### 🌐 Sito Web (`/Sito_Web`)
- **[index.html](Sito_Web/index.html)**: Home page con presentazione e highlights.
- **[eventi.html](Sito_Web/eventi.html)**: Programmazione dettagliata del festival.
- **[info.html](Sito_Web/info.html)**: Logistica, FAQ e contatti.
- **[gallery.html](Sito_Web/gallery.html)**: Esperienza visiva delle edizioni passate.
- **[registrazione.html](Sito_Web/registrazione.html)**: Pagina di accesso alla prenotazione.
- **[DOCUMENTO_ARCHITETTURALE_SITO.md](Sito_Web/DOCUMENTO_ARCHITETTURALE_SITO.md)**: Documentazione specifica del sito con sitemap.

### ⚙️ Applicativo di Booking (`/Applicativo`)
- **[prenotazione.html](Applicativo/prenotazione.html)**: Interfaccia utente dell'applicativo.
- **[script.ts](Applicativo/script.ts)**: Logica di business scritta in TypeScript.
- **[script.js](Applicativo/script.js)**: File compilato per la produzione.
- **[DOCUMENTO_ARCHITETTURALE_APP.md](Applicativo/DOCUMENTO_ARCHITETTURALE_APP.md)**: Dettagli tecnici della logica.

### 🎨 Asset e Stile (`/Sito_Web/style`)
- **[style.css](Sito_Web/style/style.css)**: Framework CSS unificato per l'intero progetto.

## 🚀 Caratteristiche Principali

- **Design Immersivo**: Estetica "Cyber-Neon" ottimizzata per la leggibilità e l'impatto visivo.
- **Prenotazione Intelligente**: 
  - Validazione età differenziata (Standard/VIP).
  - Protezione contro acquisti massivi (Max 5 biglietti).
- **Architettura Scalabile**: Codice TypeScript modulare e documentazione dettagliata.

## 🛠️ Tecnologie Utilizzate

- **Frontend**: HTML, CSS (Custom Properties, Grid, Flexbox).
- **Logic**: TypeScript (transpilato in JavaScript).
- **Diagrammi**: Mermaid.js (integrato nella documentazione Markdown).

## 📄 Documentazione Tecnica

Per una visione approfondita dell'architettura, consulta i seguenti documenti:
1.  **[Architettura Sito Web](Sito_Web/DOCUMENTO_ARCHITETTURALE_SITO.md)**: Include la sitemap grafica.
2.  **[Architettura Applicativo](Applicativo/DOCUMENTO_ARCHITETTURALE_APP.md)**: Include lo schema logico del flusso dati.

---
*Progetto realizzato per il Project Work - Neon Pulse Festival 2026.*
