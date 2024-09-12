const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "3d9b30c4e7539e5da274c808adb1ec4b";

const seltext = document.querySelector(".search input");
const selbnt = document.querySelector(".search button");

const weathericon = document.querySelector(".w-icon");

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    if (response.status == 404) {
        document.querySelector(".climate").style.display = "none";
        document.querySelector(".error").style.display = "block";
    }
    else {
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".hval").innerHTML = data.main.humidity + "%";
        document.querySelector(".wval").innerHTML = Math.round(data.wind.speed) + " km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "/weatherApp/images/clouds.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "/weatherApp/images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "/weatherApp/images/mist.png";
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "/weatherApp/images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "/weatherApp/images/rain.png";
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "/weatherApp/images/mist.png";
        }

        document.querySelector(".climate").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

selbnt.addEventListener('click', () => {
    checkWeather(seltext.value);
})
