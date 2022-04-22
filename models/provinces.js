const mongoose = require('mongoose');
const { Schema, model } = mongoose;

//model of the province

const provinceSchema = new Schema({
    name: String,
    description: String,
    populationInProv: Number,
    raceLabels: [],
    populationByRace: [],
    populationByLanguage: [],
    higherEducation: {}
});

module.exports = model('Province', provinceSchema);