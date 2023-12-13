const apiKey = '00e7d1b11241fc3b8c3d48402580c98c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q='
const weatherImg = document.querySelector('.weatherImg');

async function checkWeather () {
    try {
        const cityWeather = document.getElementById('cityWeather').value.trim();
        let response = await axios.get(`${apiUrl}${cityWeather}&appid=${apiKey}`);
        let data = response.data;
        
console.log(data);

        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.fa-temperature-half').innerHTML = data.main.humidity + ' %';
        document.querySelector('.fa-wind').innerHTML = data.wind.speed + ' km / h';

        if(data.weather[0].main === 'Clouds'){
            weatherImg.src = '../../TigerImages/clouds.png'
        }
        else if(data.weather[0].main === 'Rain'){
            weatherImg.src = '../../TigerImages/rain.png'
        }
        else if(data.weather[0].main === 'Clear'){
            weatherImg.src = '../../TigerImages/sun.png'
        }
        else if(data.weather[0].main === 'Drizzle'){
            weatherImg.src = '../../TigerImages/cloud-rain-icon-2.png'
        }
        else if(data.weather[0].main === 'Mist'){
            weatherImg.src = '../../TigerImages/mist.png'
        }

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';

    } catch (error) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
}

const searchBtn = document.querySelector('.searchBtn');
searchBtn.addEventListener('click', checkWeather);

