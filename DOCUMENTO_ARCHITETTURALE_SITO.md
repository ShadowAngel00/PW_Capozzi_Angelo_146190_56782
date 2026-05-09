# Documento Architetturale del Sito Web - Neon Pulse Festival

## 1. Sitemap (Schema Grafico)

```mermaid
graph TD
    A[Home - index.html] --> B[Eventi - eventi.html]
    A --> C[Info - info.html]
    A --> D[Gallery - gallery.html]
    A --> E[Prenota - registrazione.html]
    E --> F[Applicativo - applicativo/prenotazione.html]
    
    subgraph Asset
    G[Stile - style/style.css]
    end
    
    A -.-> G
    B -.-> G
    C -.-> G
    D -.-> G
    E -.-> G
    F -.-> G
```

## 2. Descrizione delle Pagine

Il sito è strutturato in modo gerarchico per facilitare la navigazione:

- **Home ([index.html](file:///c:/Users/angyc/Desktop/Project%20work/Project_Work-Capozzi/index.html))**: Presentazione del festival e call-to-action principale.
- **Eventi ([eventi.html](file:///c:/Users/angyc/Desktop/Project%20work/Project_Work-Capozzi/eventi.html))**: Programma dettagliato e date delle performance.
- **Info ([info.html](file:///c:/Users/angyc/Desktop/Project%20work/Project_Work-Capozzi/info.html))**: Informazioni logistiche, sicurezza e contatti.
- **Gallery ([gallery.html](file:///c:/Users/angyc/Desktop/Project%20work/Project_Work-Capozzi/gallery.html))**: Archivio fotografico delle edizioni passate.
- **Prenota ([registrazione.html](file:///c:/Users/angyc/Desktop/Project%20work/Project_Work-Capozzi/registrazione.html))**: Pagina di atterraggio per l'utente prima dell'accesso all'acquisto.
- **Applicativo ([prenotazione.html](file:///c:/Users/angyc/Desktop/Project%20work/Project_Work-Capozzi/applicativo/prenotazione.html))**: Form interattivo per l'acquisto dei biglietti.

## 3. Design e Stile

- **[style.css](file:///c:/Users/angyc/Desktop/Project%20work/Project_Work-Capozzi/style/style.css)**: File unificato che gestisce l'intero layout del sito e dell'applicativo.
- **Identità Visiva**: Colori neon (Pink, Cyan) su sfondo nero per richiamare l'estetica della musica elettronica.
- **Responsive Design**: Utilizzo di Flexbox e Grid per garantire la compatibilità con dispositivi mobile e desktop.

## 4. Navigazione e UX

- **Sticky Navigation**: Un menu superiore fisso garantisce l'accesso rapido a tutte le sezioni da qualsiasi punto del sito.
- **User Flow**: L'utente viene guidato dalle informazioni (Home/Eventi) verso l'azione finale (Prenotazione).
