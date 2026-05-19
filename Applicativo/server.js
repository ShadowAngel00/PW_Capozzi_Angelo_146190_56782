const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());

// 1. Serve la cartella Sito_Web come radice (priorità alta)
app.use(express.static(path.join(__dirname, '../Sito_Web')));

// 2. Serve i file statici dalla radice del progetto (per accedere a /Applicativo/...)
app.use(express.static(path.join(__dirname, '..')));

// Rotta principale: serve index.html di Sito_Web
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Sito_Web/index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`\n================================================================`);
    console.log(`Server avviato con successo!`);
    console.log(`Sito Web:    http://localhost:${PORT}`);
    console.log(`Applicativo: http://localhost:${PORT}/Applicativo/prenotazione.html`);
    console.log(`================================================================\n`);
});
