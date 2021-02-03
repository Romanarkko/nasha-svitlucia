const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/goods', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'goods.html'));
});

module.exports = router;
