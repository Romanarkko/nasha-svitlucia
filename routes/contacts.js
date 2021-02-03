const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/contacts', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'contacts.html'));
});

module.exports = router;
