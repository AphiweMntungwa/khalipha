const years = [1996, 2001, 2007, 2011]


const countries = [{
    name: "South Africa",
    description: `South Africa, officially the Republic of South Africa (RSA), is the 
    southernmost country in Africa. With over 60 million people, the country is the 
    world's 23rd-most populous nation and covers an area of 1,221,037
    square kilometres (471,445 square miles).`,

    provinces: ["KZN", "EC", "WC", "Limpompo", "MP", "Gauteng", "FS", "NW", "NC"],
    population: 60142978,
    populationByProvince: [19.3, 11.3, 11.8, 9.9, 7.8, 26, 4.9, 6.9, 2.2],
    languages: ['Afrikaans', 'English', 'IsiNdebele', 'IsiXhosa', 'IsiZulu', 'Sepedi', 'Sesotho', 'Setswana',
        'SiSwati',
        'Tshivenda',
        'Xitsonga',
    ],
    populationByLanguage: [13.5, 9.6, 2.1, 16.0, 22.7, 9.1, 7.6, 8.0, 0.5, 2.5, 2.4, 4.5],
    economy: {
        gdp: {
            years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
                2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020
            ],
            growth: [4.200000001, 2.7, 3.700374404, 2.949075468, 4.554559907, 5.277051973, 5.603806459,
                5.360474054, 3.191043886, -1.538089135, 3.039732881, 3.168556279, 2.396232385,
                2.485468008, 1.413826452, 1.321862237, 0.664552308, 1.157946952, 1.487617373,
                0.113053697, -6.431974826,
            ]
        },
        provinceByContributionGDP: [16, 8, 14, 7, 8, 34, 5, 6, 2]
    },
    ethnicGroups: {
        black: 80.7,
        coloured: 8.8,
        white: 7.9,
        asian: 2.6
    },
    religions: {
        list: ['christianity', 'noReligion', 'traditionalFaiths', 'islam', 'hinduism', 'others', 'undetermined'],
        listData: [78.0, 10.9, 4.4, 1.6, 1.0, 2.7, 1.4, ]
    },
    higherEducation: { years, growth: [7.1, 8.5, 8.4, 11.8] },
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
    higherEducation: { years, growth: [5.8, 6.9, 7.3, 9.1] }
}, {
    name: 'Limpopo',
    raceLabels: ["black", "Coloured", "Asian", "White"],
    populationInProv: 5926724,
    populationByRace: [96.7, 0.3, 0.3, 2.6],
    populationByLanguage: [2.6, 0, 2.0, 0, 0, 52.9, 0, 2.0, 0, 16.7, 17.0],
    description: `Limpopo is the northernmost province of South Africa. It is named 
    after the Limpopo River, which forms the province's western and northern borders.
    [4] The capital and largest city in the province is Polokwane.`,
    higherEducation: { years, growth: [5.1, 6.8, 6.6, 9.2] }
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
    higherEducation: { years, growth: [5.0, 5.7, 6.2, 7.5] }
}, {
    name: 'Northern Cape',
    raceLabels: ["black", "Coloured", "Asian", "White"],
    populationInProv: 1303047,
    populationByRace: [50.4, 40.3, 1.7, 7.1],
    populationByLanguage: [53.8, 3.4, 0, 5.3, 0, 0, 0, 33.1, 0, 0, 0],
    description: `The Northern Cape (Afrikaans: Noord-Kaap; Xhosa: eMntla-Koloni; 
        Tswana: Kapa Bokone) is the largest and most sparsely populated province of South Africa. 
        It was created in 1994 when the Cape Province was split up. Its capital is Kimberley.`,
    higherEducation: { years, growth: [6.2, 5.9, 6.3, 7.2] }
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
    higherEducation: { years, growth: [9.9, 12.3, 10.3, 17.7] }
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
    higherEducation: { years, growth: [5.9, 6.3, 7.7, 9.5] }
}, {
    name: 'Eastern Cape',
    raceLabels: ["black", "Coloured", "Asian", "White"],
    populationInProv: 6676590,
    populationByRace: [86.3, 8.3, 0.4, 4.7],
    populationByLanguage: [10.6, 5.6, 0, 78.8, 0, 0, 2.5, 0, 0, 0, 0],
    description: `The Eastern Cape (Xhosa: iMpuma-Koloni, Afrikaans: Oos-Kaap) 
    is one of the provinces of South Africa. 
    Its capital is Bhisho, but its two largest cities are East London and Port Elizabeth.`,
    higherEducation: { years, growth: [5.1, 6.3, 6.6, 8.5] }
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
    higherEducation: { years, growth: [5.5, 6.0, 6.9, 9.2] }
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
    higherEducation: { years, growth: [11.5, 11.2, 12.0, 14.1] }
}]

module.exports = { countries, prov };