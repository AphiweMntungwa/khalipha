if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const Country = require('./models/Country');
const Province = require('./models/Province')
const axios = require('axios');

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
//foreign exchange route
app.get('/forex', async(req, res) => {
    const { base, toCurrency } = req.body;
    const link = `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.FX_API_KEY}`;
    axios(link)
        .then(response => {
            res.send(response.data)
        })
        .catch(e => {
            res.send({ error: e.message })
        })
})

//route to country
app.get('/:country', async(req, res) => {
    const { country: countryName } = req.params;
    const country = await Country.find({ name: countryName });
    res.send(country)
});

//route to province, sends back country with provinceRef array
app.post('/:country/province', async(req, res) => {
    const { name: province } = req.body
    const { country: countryName } = req.params
    const country = await Country.find({ name: countryName }).populate('provinces')
    res.send({ province, country })
});

//search route
app.get('/search/:q', async(req, res) => {
    const { q } = req.params;
    const countries = await Country.find({});
    const provinces = await Province.find({});
    const countrySearch = { ownArr: [] }
    const provinceSearch = { ownArr: [] }

    function searchBox(arr, itemSearch, q) {
        arr.forEach(el => {
            el.name.toLowerCase().includes(q.toLowerCase()) &&
                itemSearch.ownArr.push(el.name)
        });
    }
    searchBox(countries, countrySearch, q, )
    searchBox(provinces, provinceSearch, q)
    res.send({ countrySearch, provinceSearch });
})