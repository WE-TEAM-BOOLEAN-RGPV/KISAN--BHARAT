const express = require('express');
const router = express.Router();
const path = require('path');


// nav
router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'producthome.html'));
});
router.get('/addproduct', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'add_product.html'));
});
router.get('/scheme', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'scheme.html'));
});
router.get('/jobs', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'job_app.html'));
});

// main
router.get('/buy', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'buy_page.html'));

});router.get('/rent', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'rent_page.html'));
});

// product (sample)
                router.get('/about1', (req, res) => {
                    res.sendFile(path.join(__dirname, '..', 'prod_details1.html'));

                });router.get('/contact1', (req, res) => {
                    res.sendFile(path.join(__dirname, '..', 'contact1.html'));
                });

module.exports = router;