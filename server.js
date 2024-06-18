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

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.get('/cart', (req, res) => {
    res.render('cart.ejs');
});

app.post('/login', (req, res) => {
    const { email, password} = req.body;
    console.log(email);
    console.log(password);
    con.verifyLogin(email, password, function(err, result) {
        if (err) {
            return res.status(500);
        } else {
            res.render('landing.ejs');
        }
    });

});

app.post('/register', (req, res) => {
    const { name, email, password, contact } = req.body;
    con.registerAccount(name, email, password, contact, function(err, result) {
        if (err) {
            return res.status(500);
        } else {
            res.render('login.ejs');
        }
    });
});





app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
