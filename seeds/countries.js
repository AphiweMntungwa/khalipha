const countries = [{
    name: "South Africa",
    description: `South Africa, officially the Republic of South Africa (RSA), is the 
    southernmost country in Africa. With over 60 million people, the country is the 
    world's 23rd-most populous nation and covers an area of 1,221,037
    square kilometres (471,445 square miles).`,

    provinces: ["KZN", "EC", "WC", "Limpompo", "MP", "Gauteng", "FS", "NW", "NC"],
    population: 60142978,
    populationByProvince: [7.7, 13.8, 10.6, 10.3, 6.3, 1.4, 10.6, 8.7, 30.5],
    languages: ['Afrikaans', 'English', 'IsiNdebele', 'IsiXhosa', 'IsiZulu', 'Sepedi', 'Sesotho', 'Setswana',
        'SignLanguage',
        'SiSwati',
        'Tshivenda',
        'Xitsonga',
    ],
    populationByLanguage: [13.5, 9.6, 2.1, 16.0, 22.7, 9.1, 7.6, 8.0, 0.5, 2.5, 2.4, 4.5],
    economicindicators: [{
        currentGDP: 301.9,
        overTheYearsGDP: [],
        currentPerCapGDP: 7200,
        overTheYearsPerCapitaGDP: [],
        unemployment: '',
    }],
    ethnicGroups: {
        black: 80.7,
        coloured: 8.8,
        white: 7.9,
        asian: 2.6
    },
    religions: {
        christianity: 78.0,
        noReligion: 10.9,
        traditionalFaiths: 4.4,
        islam: 1.6,
        hinduism: 1.0,
        others: 2.7,
        undetermined: 1.4,
    },
    president: 'Cyril Ramaphosa'
}]

const provinces = [{
    provinceName: 'kwaZulu-Natal',
    populationInKzn: 10000000,
    raceLabels: ["black", "Coloured", "Asian", "White"],
    populationByRace: [8912921, 141376, 756991, 428842],
    languagesSpoken: [],
    populationByLanguageProvince: [],
    provinceDescription: `KwaZulu-Natal (/kwɑːˌzuːluː nəˈtɑːl/, also referred to as KZN and 
    known as "the garden province";[5] Zulu: iKwaZulu-Natali; Xhosa: KwaZulu-Natala; 
    Afrikaans: KwaZoeloe-Natal) is a province of South Africa that was created in 1994 
    when the Zulu bantustan of KwaZulu ("Place of the Zulu" in Zulu) and Natal Province 
    were merged.`,
}]


const prov = [{
    name: 'kwaZulu-Natal',
    raceLabels: ["black", "Coloured", "Asian", "White"],
    populationInProv: 10000000,
    populationByRace: [8912921, 141376, 756991, 428842],
    populationByLanguage: [],
    description: `KwaZulu-Natal (/kwɑːˌzuːluː nəˈtɑːl/, also referred to as KZN and 
    known as "the garden province";[5] Zulu: iKwaZulu-Natali; Xhosa: KwaZulu-Natala; 
    Afrikaans: KwaZoeloe-Natal) is a province of South Africa that was created in 1994 
    when the Zulu bantustan of KwaZulu ("Place of the Zulu" in Zulu) and Natal Province 
    were merged.`,
}, {
    name: 'Limpopo',
    raceLabels: ["black", "Coloured", "Asian", "White"],
    populationInProv: 5000000,
    populationByRace: [5224754, 14415, 17881, 139359],
    populationByLanguage: [],
    description: `it goes somethinf likr yadatata`,
}, {
    name: 'North West',
    raceLabels: ["black", "Coloured", "Asian", "White"],
    populationInProv: 4000000,
    populationByRace: [3152063, 71409, 20652, 255385],
    populationByLanguage: [],
    description: `why do i keep on hearing sounds what is happeing in the worlsd righr now`,
}]

module.exports = { countries, provinces, prov };