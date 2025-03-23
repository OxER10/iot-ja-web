// Oskari Järvinen

// Function to get correct picture from condition code
// Codes can be found in: https://www.weatherapi.com/docs/weather_conditions.json

function getWeatherIcon(conditionCode) {
    const condition = conditionCode;
    if (condition == 1000) {
        return 'sunny.png';
    }
    else if (condition == 1003) {
        return 'partlyCloudy.png';
    }
    else if (condition == 1006 || condition == 1009) {
        return 'cloudy.png';
    }
    else if (condition == 1030 || condition == 1135 || condition == 1147) {
        return 'fog.png';
    }
    else if (condition == 1063 || condition == 1072 || condition == 1153 || condition == 1168 || condition == 1171 || condition == 1180 || condition == 1183 || condition == 1198) {
        return 'lightRain.png';
    }
    else if (condition == 1186 || condition == 1189 || condition == 1201) {
        return 'moderateRain.png';
    }
    else if (condition == 1192 || condition == 1195) {
        return 'heavyRain.png';
    }
    else if (condition == 1066 || condition == 1069 || condition == 1213) {
        return 'lightSnow.png';
    }
    else if (condition == 1114) {
        return 'moderateSnow.png';
    }
    else if (condition == 1117 || condition == 1225) {
        return 'heavySnow.png';
    }
    else if (condition == 1087) {
        return 'storm.png';
    }
    else {
        return 'question.png';
    }
}

// function to update fields in html
function updateCurrentWeather(data) {
    // Saving data to variables
    const location = data.location;
    const current = data.current;

    // Update location and local time
    document.getElementById('city').textContent = location.name;
    document.getElementById('country').textContent = location.country;
    document.getElementById('localTime').textContent = location.localtime;

    // Update current weather fields
    document.getElementById('lastUpdated').textContent = current.last_updated;
    document.getElementById('weatherIcon').src = "images/" + getWeatherIcon(current.condition.code);
    document.getElementById('celsius').textContent = `${current.temp_c}°C`;
    document.getElementById('fahrenheit').textContent = `${current.temp_f}°F`;
    document.getElementById('condition').textContent = current.condition.text;
    document.getElementById('humidity').textContent = `${current.humidity}%`;
    document.getElementById('windSpeed').textContent = `${Math.round(current.wind_kph * (5/18))}m/s`;
    document.getElementById('celsiusFeels').textContent = `${current.feelslike_c}°C`;
    document.getElementById('fahrenheitFeels').textContent = `${current.feelslike_f}°F`;
    document.getElementById('precipitation').textContent = `${current.precip_mm}mm`;
}

// function to inject forecast items inside the forecast container
function updateForecast(data) {
    const forecastContainer = document.getElementById('forecastContainer');
    forecastContainer.innerHTML = ''
    
    // Repeats for how many days are API. My API supports 3 days
    data.forecast.forecastday.forEach(day => {
        // Saving data to variables
        const dayData = day.day;
        const date = new Date(day.date);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

        // Injects this part into the html
        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';
        forecastItem.innerHTML = `
            <div class="forecast-header">
                <h3>${dayName}</h3>
                <p class="title">${formattedDate}</p>
            </div>
            <div class="forecast-body">
                <div class="forecast-icon">
                    <img src="images/${getWeatherIcon(dayData.condition.code)}">
                </div>
                <p class="condition">${dayData.condition.text}</p>
                <p class="condition">${dayData.avgtemp_c}°C / ${dayData.avgtemp_f}°F</p>
            </div>
            <div class="forecast-details">
                <p>
                    <span class="title">Min.</span>
                    <span>${dayData.mintemp_c}°C / ${dayData.mintemp_f}°F</span>
                </p>
                <p>
                    <span class="title">Humidity:</span>
                    <span>${dayData.avghumidity}%</span>
                </p>
                <p>
                    <span class="title">Wind Speed:</span>
                    <span>${Math.round(dayData.maxwind_kph * (5/18))}m/s</span>
                <p>
                    <span class="title">Percipitation:</span>
                    <span>${dayData.totalprecip_mm}mm</span>
                </p>
                ${dayData.totalsnow_cm == 0.0 ? ""
                    : `<p>
                        <span class="title">Total Snow:</span>
                        <span>${dayData.totalsnow_cm}cm</span>
                        </p>
                    `
                }
            </div
            
        `
        forecastContainer.appendChild(forecastItem);
    })
}

// function to initialize the DOMContentLoaded listener
function intialize() {
    // fetch default data to display
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=e4d29683248b4971b06143543252303&q=tampere&days=3&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(data => {
        updateCurrentWeather(data);
        updateForecast(data);
    })
    .catch(error => {
        console.error('Error fetching data from API', error);
        alert('Unable to fetch data from API');
    });

    // Search functionality
    document.getElementById('searchButton').addEventListener('click', function() {
        const location = document.getElementById('searchBar').value.trim();
        if (location) {
            fetch(`https://api.weatherapi.com/v1/forecast.json?key=e4d29683248b4971b06143543252303&q=${location}&days=3&aqi=no&alerts=no`)
            .then(response => response.json())
            .then(data => {
                updateCurrentWeather(data);
                updateForecast(data);
            })
            .catch(error => {
                console.error('Error fetching data from API', error);
                alert('Unable to fetch data from API');
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', intialize);