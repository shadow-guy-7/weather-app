const API_KEY = `32d374f00ab50089a84a31fa6c8245f1`;
const form = document.querySelector("form");
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");

// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

// const IMG_URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const getWeather = async(city) => {
    weather.innerHTML = `Loading...`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data);
}

const showWeather = (data) => {
    
    if(data.cod == "404")
    { 
        weather.innerHTML = `<h2>City not found</h2>`;
        return;
    }
    else
    weather.innerHTML = `
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
        <h2>${data.main.temp} ℃</h2>
        <h2>${data.weather[0].main}</h2>
    </div>
    `
}

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value);
        event.preventDefault();

    }
)