import { countryList } from './codes.js';

const Base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"

const dropdown = document.querySelector(".dropdown-select");

for (let code in countryList){
    console.log(code);
}