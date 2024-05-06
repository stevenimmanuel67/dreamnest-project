const express = require('express')
const app = express()
const session = require('express-session');
const bodyParser = require('body-parser');
const port = 3000
const ejs = require('ejs')
const path = require("path");
const dbs = require("./DreamnestLogin");
const note = require("./note");
const mongoose = require('mongoose');




app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.set('view engine', 'ejs')




app.get('/', async (req,res) => {
    res.render("dreamnestregister")
})
  
app.get('/Login', async (req,res) => {
    res.render("Login")
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Lakukan pengecekan apakah akun ada di database
        const userExist = await dbs.findOne({ email });

        if (userExist) {
            // Jika akun ditemukan, cek apakah password cocok
            if (userExist.password === password) {
                res.redirect('/dreamnest'); // Jika password cocok, redirect ke halaman setelah login
            } else {
                res.render('Login', { error: 'Password is incorrect' }); // Jika password tidak cocok, tampilkan pesan error
            }
        } else {
            // Jika akun tidak ditemukan, tampilkan pesan error
            res.render('Login', { error: 'Email not found. Please register first.' });
        }
    } catch (error) {
        console.error('An error occurred:', error);
        res.render('Login', { error: 'An error occurred. Please try again later.' });
    }
});

app.get('/AboutDreamnest', (req,res) => {
    res.render('AboutDreamnest')
})

app.post("/dreamnest", (req, res) => {
    res.render("dreamnest");
});

app.post("/dreamnestregister", async (req, res) => {

    const data = {
        email:req.body.email,
        name: req.body.username,
        password: req.body.password
    }

    // Check if the username already exists in the database
    const userExist = await dbs.findOne({ email: data.email });

    if (userExist) {
        res.send('Email already exist');
    } else {
        try {
            const userdata = await dbs.create(data);
            console.log(userdata);
            res.redirect("/dreamnest");
        } catch (error) {
            res.send('An error occurred');
        }
    }
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})