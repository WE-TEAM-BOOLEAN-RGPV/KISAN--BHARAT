const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'producthome.html'));
});
router.get('/cancel', (req, res) => {
    res.redirect(301, '/landing.html');
});

router.get('/forgotpass', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'reset_pass.html'));
});

module.exports = router;