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


const prov = [{
    name: 'kwaZulu-Natal',
    raceLabels: ["Black", "Coloured", "Asian", "White"],
    populationInProv: 11513575,
    populationByRace: [86.8, 1.4, 7.4, 4.2],
    populationByLanguage: [1.6, 13.2, 0, 3.4, 77.8, 0, 0, 0, 0, 0, 0],
    description: `KwaZulu-Natal (/kwɑːˌzuːluː nəˈtɑːl/, also referred to as KZN and 
    known as "the garden province";[5] Zulu: iKwaZulu-Natali; Xhosa: KwaZulu-Natala; 
    Afrikaans: KwaZoeloe-Natal) is a province of South Africa that was created in 1994 
    when the Zulu bantustan of KwaZulu ("Place of the Zulu" in Zulu) and Natal Province 
    were merged.`,
}, {
    name: 'Limpopo',
    raceLabels: ["black", "Coloured", "Asian", "White"],
    populationInProv: 5926724,
    populationByRace: [96.7, 0.3, 0.3, 2.6],
    populationByLanguage: [2.6, 0, 2.0, 0, 0, 52.9, 0, 2.0, 0, 16.7, 17.0],
    description: `Limpopo is the northernmost province of South Africa. It is named 
    after the Limpopo River, which forms the province's western and northern borders.
    [4] The capital and largest city in the province is Polokwane.`,
}, {
    name: 'North West',
    raceLabels: ["black", "Coloured", "Asian", "White"],
    populationInProv: 4122854,
    populationByRace: [89.8, 1.8, 0.6, 7.3],
    populationByLanguage: [9, 3.5, 0, 5.5, 2.5, 2.4, 5.8, 70.4, 0, 0, 3.7],
    description: `North West (Tswana: Bokone Bophirima; Afrikaans: Noord-wes; Northern Sotho: 
        Leboa-Bodikela) is a province of South Africa. Its capital is Mahikeng. 
        The province is located to the west of the major population centre of Gauteng. 
    It is also located next to Botswana.`,
}, {
    name: 'Northern Cape',
    raceLabels: ["black", "Coloured", "Asian", "White"],
    populationInProv: 1303047,
    populationByRace: [50.4, 40.3, 1.7, 7.1],
    populationByLanguage: [53.8, 3.4, 0, 5.3, 0, 0, 0, 33.1, 0, 0, 0],
    description: `The Northern Cape (Afrikaans: Noord-Kaap; Xhosa: eMntla-Koloni; 
        Tswana: Kapa Bokone) is the largest and most sparsely populated province of South Africa. 
        It was created in 1994 when the Cape Province was split up. Its capital is Kimberley.`,
}, {
    name: 'Gauteng',
    raceLabels: ["black", "Coloured", "Asian", "White"],
    populationInProv: 15810388,
    populationByRace: [77.4, 3.5, 2.9, 15.6],
    populationByLanguage: [12.4, 13.3, 3.2, 6.6, 19.8, 0, 22.2, 9.1, 0, 2.3, 6.6],
    description: `Gauteng (/xaʊˈtɛŋ/ khow-TENG;[4] Tswana: Gauteng; Northern and Southern Sotho: 
    Gauteng; Zulu: eGoli; Tsonga: Gauteng/eXilungwini; Ndebele, Xhosa: iRhawuti; 
    Southern Ndebele: I-Gauteng; Venda: Gauteng) is one of the nine provinces of South Africa. 
    The name in Sotho-Tswana languages means 'place of gold'.`,
}, {
    name: 'Free State',
    raceLabels: ["black", "Coloured", "Asian", "White"],
    populationInProv: 2932441,
    populationByRace: [88.7, 1.8, 0.6, 8.9],
    populationByLanguage: [12.7, 2.9, 0, 7.5, 4.4, 0, 64.2, 5.2, 0, 0, 0],
    description: `The Free State (Afrikaans: Vrystaat; Sotho: Freistata; Xhosa: iFreyistata; 
    Tswana: Foreistata; Zulu: iFuleyisitata; 
    before 1995, the Orange Free State) is a province of South Africa. 
    Its capital is Bloemfontein, which is also South Africa's judicial capital.`,
}, {
    name: 'Eastern Cape',
    raceLabels: ["black", "Coloured", "Asian", "White"],
    populationInProv: 6676590,
    populationByRace: [86.3, 8.3, 0.4, 4.7],
    populationByLanguage: [10.6, 5.6, 0, 78.8, 0, 0, 2.5, 0, 0, 0, 0],
    description: `The Eastern Cape (Xhosa: iMpuma-Koloni, Afrikaans: Oos-Kaap) 
    is one of the provinces of South Africa. 
    Its capital is Bhisho, but its two largest cities are East London and Port Elizabeth.`,
}, {
    name: 'Mpumalanga',
    raceLabels: ["black", "Coloured", "Asian", "White"],
    populationInProv: 4743584,
    populationByRace: [90.7, 0.9, 0.7, 7.5],
    populationByLanguage: [7.2, 3.1, 10.1, 0, 24.1, 9.3, 3.5, 0, 27.7, 0, 10.4],
    description: `Mpumalanga (/əmˌpuːməˈlɑːŋɡə/) is a province of South Africa. 
    The name means "east", or literally "the place where the sun rises" 
    in the Swazi, Xhosa, Ndebele and Zulu languages. 
    Mpumalanga lies in eastern South Africa, bordering Eswatini and Mozambique.`,
}, {
    name: 'Western Cape',
    raceLabels: ["black", "Coloured", "Asian", "White"],
    populationInProv: 7113776,
    populationByRace: [32, 50, 1, 17],
    populationByLanguage: [49.7, 20.2, 0, 24.7, 0, 0, 0, 0, 0, 0, 0],
    description: `The Western Cape (Afrikaans: Wes-Kaap; Xhosa: iNtshona-Koloni) is a 
    province of South Africa, situated on the south-western coast of the country. 
    It is the fourth largest of the nine provinces with an area of 129,449 square kilometres (
    49,981 sq mi), and the third most populous, with an estimated 7 million inhabitants in 2020.`,
}]

module.exports = { countries, prov };