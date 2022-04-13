const mongoose = require('mongoose');
const { Schema, model } = mongoose;

//model of the country

const countrySchema = new Schema({
    name: String,
    population: Number,
    populationByProvince: [],
    languages: [],
    populationByLanguage: [],
    description: String,
    provinces: [{
        type: Schema.Types.ObjectId,
        ref: 'Province'
    }],
    religions: {},
    economy: {}
})

module.exports = model('Country', countrySchema);