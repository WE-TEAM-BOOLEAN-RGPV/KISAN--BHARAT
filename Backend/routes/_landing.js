const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/landing(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'landing.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'login.html'));
});
router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'register.html'));
});


module.exports = router;