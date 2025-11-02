const temperatureField = document.querySelector(".temp p");
const locationField = document.querySelector(".time_location .location");
const dateField = document.querySelector(".time_location .date");
const weatherField = document.querySelector(".condition p");
const searchField = document.querySelector(".search-area");
const form = document.querySelector("form");

form.addEventListener('submit', search);

let target = "mumbai";

const fetchResult = async (target) => {
    let url = `https://api.weatherapi.com/v1/current.json?key=f9c1950ac14d490280223037252806&q=${target}&aqi=no`;


    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    let location = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;

    locationField.innerText = location;
    dateField.innerText = time;
    temperatureField.innerText = temp + "°C";
    weatherField.innerText = condition;
};

function search(e) {
    e.preventDefault();
    target = searchField.value;
    fetchResult(target);
}

fetchResult(target);
