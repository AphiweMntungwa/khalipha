const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const Country = require('./models/Country');
const Province = require('./models/Province')

//Enabling All CORS Requests
app.use(cors())
app.use(express.json())

const port = 3001 || process.env.port
app.listen(port, () => {
    console.log('LISTENING, PORT', port)
})

main().then(() => console.log('DATABASE CONNECTED')).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/infomzansi');
}

//route to country
app.get('/:country', async(req, res) => {
    const { country: countryName } = req.params;
    const country = await Country.find({ name: countryName });
    res.send(country)
});

//route to province, sends back country with provinceRef array
app.post('/:country/province', async(req, res) => {
    const { name: province } = req.body
    console.log(req.body)
    const { country: countryName } = req.params
    const country = await Country.find({ name: countryName }).populate('provinces')
    res.send({ province, country })
});