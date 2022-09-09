// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY

const getWeather = async (city) => {

    const b = document.getElementsByTagName("b")[0];
    b.style.display = (city === "") ? "flex" : "none";
    if (city === "") return;

    const weatherInfo = document.getElementById("weatherInfo");
    const oops = document.getElementById("oops");
    const oopsIMG = document.getElementById("oopsIMG");

    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=WS7T5JDNPE3N4B5QXYCYLVUQ2&contentType=json`);

    oopsIMG.style.height = response.ok ? "0" : "200px";
    oops.style.display = response.ok ? "none" : "flex";

    if (response.ok) {

        const value = await response.json();
        weatherInfo.style.display = value ? "flex" : "none";

        const weatherCondition = value.currentConditions.conditions;

        return weatherInfo.innerHTML = `
                <span>
                    <h2> ${value.resolvedAddress} </h2><pre>   </pre>
                    <img class="icon" src=${weatherConditionsIcon(weatherCondition)} alt=${weatherCondition}>
                </span>
                <hr/>
                <sup>${dayOfTheWeak}</sup>
                <sub>${value.currentConditions.datetime}</sub>
                <p>${value.description}</p>
                <hr/>    
                <ul>
                    <li>Temperature: ${convertFahrenheitToCelsius(value.currentConditions.temp)}°С</li>
                    <li>Conditions: ${weatherCondition}</li>
                    <li>Feels like: ${convertFahrenheitToCelsius(value.currentConditions.feelslike)}°С</li>
                    <li>Sunrise: ${value.currentConditions.sunrise}</li>
                    <li>Sunset: ${value.currentConditions.sunset}</li>
                    <li>Humidity: ${value.currentConditions.humidity}</li>
                    <li>Visibility: ${value.currentConditions.visibility}</li>
                    <li>Pressure: ${value.currentConditions.pressure}</li>
                </ul>
            `
    }
};

const weatherConditionsIcon = (condition) => {
    switch (condition) {
        case "Overcast":
            return "./images/overcast.png";
        case "Clear":
            return "./images/clear.png";
        case "Partially cloudy":
            return "./images/partiallyCloudy.gif";
        case "Rain":
            return "./images/rain.gif";
        case "Snow":
            return "./images/snow.gif";
        default:
            return "./images/defaultWeather.png";
    }
};

const hide = () => {
    document.getElementById("oops").style.display = "none";
};

const convertFahrenheitToCelsius = (F) => ((F - 32) / 1.8).toFixed(1);

let dayOfTheWeak = new Date().toLocaleString('ua-UK', {weekday: 'long'});
dayOfTheWeak = dayOfTheWeak.charAt(0).toUpperCase() + dayOfTheWeak.slice(1);