const express = require('express');
const router = express.Router();

// Default Response
router.get('/', (req, res) => {
    res.send('Hello, World!');
    });

// Item Route
router.use('/items', require('./items'));
// Acquirer Route
router.use('/acquirers', require('./acquirers'));

// error handling
router.use((req, res, next) => {
    res.status(404).json({ message: "Sorry, that route doesn't exist." });
  });


module.exports = router;
