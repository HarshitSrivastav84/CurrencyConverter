import { countryList } from './codes.js';

const Base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"

const dropdowns = document.querySelectorAll(".dropdown select");

// for (let code in countryList){
//     console.log(code, countryList[code]);
// }


for (let select of dropdowns){
    for (let currCode in countryList){         // 'select' in the dropdown is selected
        let newOption = document.createElement("option");  // 'option' in the 'select' is created
        newOption.innerText = currCode;
        newOption.value = currCode;

        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }
        else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }

        select.appendChild(newOption);    // 'option' is added to the 'select'
    }
}