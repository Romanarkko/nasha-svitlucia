const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const index = require('./routes/index');
const about = require('./routes/about');
const contacts = require('./routes/contacts');
const goods = require('./routes/goods');
const mc = require('./routes/mc');

const app = express();

app.use(bodyParser.urlencoded({ expended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(goods);
app.use(contacts);
app.use(about);
app.use(mc);
app.use(index);
app.listen(3000);
console.log('is up');
