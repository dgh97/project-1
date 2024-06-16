const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const con = require('./controller');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use((bodyParser.urlencoded({ extended:true })));

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.render('landing.ejs');
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username);
    console.log(password);
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
