const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const bookingService = require('./bookingService');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the root directory to allow access to Sito_Web assets
app.use(express.static(path.join(__dirname, '..')));
// Specifically serve the current directory as well if needed
app.use('/Applicativo', express.static(__dirname));

// Routes
app.get('/api/booking/health', (req, res) => {
    res.json({ status: 'Booking Service is running' });
});

app.post('/api/booking/confirm', (req, res) => {
    try {
        const bookingData = req.body;
        const response = bookingService.processBooking(bookingData);
        
        if (response.success) {
            res.status(200).json(response);
        } else {
            res.status(400).json(response);
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Errore durante l\'elaborazione della prenotazione: ' + error.message,
            data: req.body
        });
    }
});

app.post('/api/booking/validate', (req, res) => {
    try {
        const bookingData = req.body;
        const response = bookingService.processBooking(bookingData);
        
        if (response.success) {
            res.status(200).json(response);
        } else {
            res.status(400).json(response);
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Errore durante la validazione: ' + error.message,
            data: req.body
        });
    }
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Errore del server'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});
