const dotenv = require("dotenv").config();
const mongoose = require('mongoose');
const Country = require('../models/countries')
const Province = require('../models/provinces')
const { countries, prov } = require('./countries')
const {
    name,
    population,
    populationByProvince,
    languages,
    populationByLanguage,
    description,
    religions,
    economy
} = countries[0]

//Seeding the database with sample data
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/infomzansi'
main().then(() => console.log('DATABASE CONNECTED')).catch(err => console.log(err));
async function main() {
    await mongoose.connect(dbUrl);
}

async function seedData() {
    await Country.deleteMany({});
    const southAfrica = new Country({
        name,
        population,
        populationByProvince,
        languages,
        populationByLanguage,
        description,
        religions,
        economy
    })
    southAfrica.save().then(async() => {
        await Province.deleteMany({});
        prov.forEach((el, i) => {
            let province = new Province({
                name: el.name,
                raceLabels: el.raceLabels,
                populationInProv: el.populationInProv,
                populationByRace: el.populationByRace,
                populationByLanguage: el.populationByLanguage,
                description: el.description
            })
            southAfrica.provinces.push(province)
            province.save().then(console.log(i))
        })
        southAfrica.save().then(() => mongoose.connection.close())

    }).catch(e => console.log(e))
}
seedData()