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
  

app.get('/about', (req,res) => {
    res.render('About_Us')
})

app.post("/dreamnestLoginHTML", async (req, res) => {

    const data = {
        email:req.body.email,
        name: req.body.username,
        password: req.body.password
    }

    // Check if the username already exists in the database
    const  userExist = await dbs.findOne({ email: data.email });

    if (userExist) {
        res.send('Email already exist');
    } else {
        const userdata = await dbs.insertMany(data);
        console.log(userdata);
        res.render("dreamnest")
    }

});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})