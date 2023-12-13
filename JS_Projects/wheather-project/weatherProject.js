const apiKey = '00e7d1b11241fc3b8c3d48402580c98c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q='

async function checkWeather () {
    try {
        const cityWeather = document.getElementById('cityWeather').value.trim();
        let response = await axios.get(`${apiUrl}${cityWeather}&appid=${apiKey}`);
        let data = response.data;

        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.fa-temperature-half').innerHTML = data.main.humidity + ' %';
        document.querySelector('.fa-wind').innerHTML = data.wind.speed + ' km / h';

        
    } catch (error) {
        console.log(new Error('try again please!'));
    }
}

const searchBtn = document.querySelector('.searchBtn');
searchBtn.addEventListener('click', checkWeather);

