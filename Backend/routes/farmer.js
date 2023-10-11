const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'farmerhome.html'));
});
router.get('/cancel', (req, res) => {
    res.redirect(301, '/landing.html');
});


module.exports = router;