const express = require('express');
const path = require('path');
require('dotenv').config();
const con = require('./controller');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.render('main.ejs');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
