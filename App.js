const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('/', (req, res) => {});

app.listen(3000);
