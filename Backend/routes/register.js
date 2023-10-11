const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/farmer', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'farmer.html'));
});
router.get('/vendor', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'vendor.html'));
});
router.get('/fpo', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'fpo.html'));
});


module.exports = router;