const mongoose = require('mongoose');
const Country = require('../models/Country')
const Province = require('../models/Province')
const { countries, provinces: provinceFolder, prov } = require('./countries')
const {
    name,
    population,
    populationByProvince,
    languages,
    populationByLanguage,
    description
} = countries[0]

const {
    provinceName,
    raceLabels,
    populationInKzn,
    populationByRace,
    populationByLanguageProvince,
    provinceDescription,
} = provinceFolder[0];

//Seeding the database with sample data

main().then(() => console.log('DATABASE CONNECTED')).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/infomzansi');
}

async function seedData() {
    await Country.deleteMany({});
    const southAfrica = new Country({
        name,
        population,
        populationByProvince,
        languages,
        populationByLanguage,
        description
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