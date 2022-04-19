import axios from "axios"

export let configR = () => {
    axios.get('http://localhost:3001/south-africa').then(response => {
        return response.data;
    }).catch(e => console.log('axios error on props', e))
}
export const homeConfig = {
    name: "South Africa",
    label: "ZAR",
    population: "+60m"
}
export const provinceConfig = {
    name: "kwaZulu-Natal",
    label: "KZN",
    population: "+10m"
}