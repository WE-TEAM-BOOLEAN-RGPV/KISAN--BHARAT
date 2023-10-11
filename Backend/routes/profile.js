const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/apply', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'fpo_app.html'));
});
router.get('/new_job', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'job_list.html'));
});

module.exports = router;