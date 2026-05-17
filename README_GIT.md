# Git: Come usare `git pull` e `git push`

Questo file spiega passo dopo passo come aggiornare il repository locale e inviare le modifiche al repository remoto.

## 1) Preparazione iniziale

1. Apri il terminale nella cartella del progetto:
   ```bash
   cd "c:\Users\angyc\Desktop\Project_Work-Capozzi"
   ```
2. Controlla lo stato dei file:
   ```bash
   git status
   ```

## 2) Aggiornare il repository locale (`git pull`)

Prima di aggiungere o inviare modifiche, scarica le ultime modifiche dal repository remoto.

1. Assicurati di essere sul branch corretto, ad esempio `main` o `master`:
   ```bash
   git branch
   ```
2. Se non sei sul branch giusto, spostati:
   ```bash
   git checkout main
   ```
3. Scarica e integra le modifiche remote:
   ```bash
   git pull origin main
   ```

> Se il tuo ramo remoto si chiama `master`, sostituisci `main` con `master`.

## 3) Aggiungere modifiche locali (`git add`)

1. Aggiungi i file modificati al prossimo commit:
   ```bash
   git add .
   ```
2. Verifica i file aggiunti:
   ```bash
   git status
   ```

## 4) Creare un commit (`git commit`)

1. Crea il commit con un messaggio chiaro:
   ```bash
   git commit -m "Descrivi qui le modifiche effettuate"
   ```

## 5) Inviare le modifiche al repository remoto (`git push`)

1. Invia il commit al branch remoto:
   ```bash
   git push origin main
   ```

> Anche qui, se il branch remoto è `master`, usa `git push origin master`.

## 6) Passaggi completi in sequenza

```bash
cd "c:\Users\angyc\Desktop\Project_Work-Capozzi"
git status
git checkout main
git pull origin main
git add .
git status
git commit -m "Aggiunto README_GIT con istruzioni Git"
git push origin main
```

## 7) Note utili

- Se `git pull` genera conflitti, risolvili manualmente nei file indicati, poi salva e fai:
  ```bash
  git add .
  git commit -m "Risolti conflitti"
  git push origin main
  ```
- Se non hai ancora impostato `user.name` e `user.email`:
  ```bash
  git config --global user.name "Il Tuo Nome"
  git config --global user.email "tuo@email.com"
  ```

## 8) Verifica finale

Dopo `git push`, conferma che le modifiche sono arrivate correttamente nel repository remoto.

---

*Questo documento è pensato per l'uso nel progetto Neon Pulse Festival.*