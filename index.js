const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const Country = require('./models/Country');
const Province = require('./models/Province');
const session = require('express-session');
const req = require('express/lib/request');

//Enabling All CORS Requests
app.use(cors())


const port = 3001 || process.env.port
app.listen(port, () => {
    console.log('LISTENING, PORT', port)
})

main().then(() => console.log('DATABASE CONNECTED')).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/infomzansi');
}
//session config
const sessionConfig = {
    name: 'recaller',
    secret: 'iamintrouble' || process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        sameSite: 'none',
        expires: Date.now() * 1000 * 60 * 60 * 24 * 7 * 3,
        maxAge: 1000 * 60 * 60 * 24
    }
}
app.use(session(sessionConfig))

//route to country
app.get('/:country', async(req, res) => {
    const { country: countryName } = req.params;
    const country = await Country.find({ name: countryName });
    res.send(country)
});

//route to province, sends back country with provinceRef array
app.get('/:country/:province', async(req, res) => {
    const { country: countryName, province } = req.params;
    const country = await Country.find({ name: countryName }).populate('provinces');
    res.send({ province, country })
});

//session getting whether dark mode is on or off
app.get('/:darkMode', async(req, res) => {
    res.send({ darkMode: req.session.darkMode })
})

app.post('/:darkMode', async(req, res) => {
    const { darkMode } = req.body;
    if (darkMode) {
        req.session.darkMode = true;
        res.send({ darkMode: req.session.darkMode })
    } else {
        req.session.darkMode = false;
        res.send({ darkMode: req.session.darkMode })
    }
})