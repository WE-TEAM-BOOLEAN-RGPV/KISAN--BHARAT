const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/rent', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'rent_app.html'));
});
router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'seller_contact.html'));
});

module.exports = router;