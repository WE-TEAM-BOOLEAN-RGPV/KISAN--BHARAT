const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'job_in.html'));
});
router.get('/cancel', (req, res) => {
    res.redirect(301, '/profile.html'); 
});

module.exports = router;