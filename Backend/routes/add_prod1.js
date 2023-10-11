const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/next', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'add_prod2.html'));
});

module.exports = router;