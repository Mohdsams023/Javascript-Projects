const apiKey = "29dba325bfd13d1e3fec464e02c738c5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const SearchBtn = document.querySelector(".input-fields input");
const inputBtn = document.querySelector(".input-fields button");
const Icons = document.querySelector(".Weather-icon")


async function checkWeather(city) {
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await responce.json();
    console.log(data);

    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#temps").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        Icons.src = "images/clouds.png"
        
    }
    else if (data.weather[0].main == "Clear") {
        Icons.src = "images/clear.png"
        
    }

    else if (data.weather[0].main == "Drizzle") {
        Icons.src = "images/drizzle.png"
        
    }

    else if (data.weather[0].main == "Mist") {
        Icons.src = "images/mist.png"
        
    }

    else if (data.weather[0].main == "Rain") {
        Icons.src = "images/rain.png"
        
    }

    document.querySelector(".Weather").style.display = "block"


    
}


inputBtn.addEventListener("click", ()=> {checkWeather(SearchBtn.value)})

