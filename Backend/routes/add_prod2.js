const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/buy', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'productmain.html'));
});

module.exports = router;