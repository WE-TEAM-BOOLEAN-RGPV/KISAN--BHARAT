const express = require('express');
const router = express.Router();
const path = require('path');


// card (sample)
            router.get('/apply', (req, res) => {
                res.sendFile(path.join(__dirname, '..', 'job_app.html'));
            });

module.exports = router;