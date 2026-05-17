# Documento Architetturale dell'Applicativo Booking

## 1. Descrizione Funzionale

L'applicativo gestisce la prenotazione dei biglietti per il festival Neon Pulse tramite un'interfaccia interattiva e dinamica.

## 2. Diagramma di Flusso (Logic Schema)

```mermaid
flowchart TD
    Start([Inizio]) --> InputName[Inserimento Nome Partecipante]
    InputName --> CheckName{Controllo Nome}
    
    CheckName -- Contiene numeri --> ErrorName[Errore: Nome non valido]
    CheckName -- OK --> InputAge[Inserimento Età]
    InputAge --> InputTickets[Inserimento Numero di Biglietti]
    InputTickets --> SelectType[Selezione Tipo di Ingresso: Standard/VIP]
    SelectType --> CheckAge{Controllo Età}
    
    CheckAge -- Standard < 16 --> ErrorAge[Errore: Minimo 16 anni]
    CheckAge -- VIP < 18 --> ErrorAge
    CheckAge -- OK --> CheckTickets{Quantità <= 5?}
    
    CheckTickets -- No --> ErrorTickets[Errore: Max 5 biglietti]
    CheckTickets -- Sì --> Success[Conferma Prenotazione]
    
    ErrorName --> Retry[Mostra errore e richiede correzione]
    ErrorAge --> Retry
    ErrorTickets --> Retry
    Retry --> InputName
    Success --> End([Prenotazione completata con successo])
```

## 3. Tecnologie Utilizzate

- **TypeScript ([script.ts](script.ts))**: logica di frontend primaria. Il browser carica direttamente `script.ts` a runtime con compilazione in memoria.
- **HTML/CSS ([prenotazione.html](prenotazione.html))**: struttura semantica e integrazione con il sistema di stile globale.

## 4. Logica di Business e Vincoli

- **Validazione Nome**: Il sistema impedisce l'inserimento di numeri nel campo nome per garantire l'integrità dei dati.
- **Validazione Età**: 
  - **Standard**: Richiede un'età minima di 16 anni.
  - **VIP**: Richiede un'età minima di 18 anni (accesso aree riservate).
- **Limite Quantitativo**: Impedisce l'acquisto di più di 5 biglietti per singola transazione.
- **Ciclo di Correzione**: In caso di errore, il flusso non termina. Il sistema mostra il messaggio di errore e consente all'utente di correggere i dati e riprovare.
- **Successo Finale**: Il ciclo termina solo quando tutti i controlli sono superati e la prenotazione viene confermata.
- **Feedback Dinamico**: Utilizzo di classi CSS e manipolazione del DOM per mostrare messaggi di stato. I messaggi di conferma sono personalizzati in base al tipo di biglietto (Standard/VIP) e al numero di biglietti (singolare/plurale).

## 5. Struttura Tecnica del Codice

- **Interfacce**: Definizione di `BookingData` per garantire l'integrità dell'oggetto di prenotazione.
- **Moduli**: Separazione delle responsabilità tra logica di calcolo (`processBooking`) e gestione dell'interfaccia (`showResult`).
- **Server/Client**: Il server espone endpoint per la validazione e conferma della prenotazione, mentre il client invia i dati e gestisce il ciclo di retry lato utente.
