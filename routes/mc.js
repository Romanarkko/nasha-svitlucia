const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/mc', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'mc.html'));
});

module.exports = router;
