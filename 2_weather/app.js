const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherDiv = document.getElementById("weather");
const errorDiv = document.getElementById("error");

// Replace with your own API key
const API_KEY = "8825362014dd25d7af019a25f0c07fcf";

searchBtn.addEventListener("click", getWeather);
cityInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getWeather();
  }
});

function getWeather() {
  const city = cityInput.value.trim();
  if (city === "") return;

  errorDiv.textContent = "";
  weatherDiv.innerHTML = "Loading...";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      weatherDiv.innerHTML = "";
      errorDiv.textContent = error.message;
    });
}

function displayWeather(data) {
  weatherDiv.innerHTML = `
    <div class="temp">${Math.round(data.main.temp)}°C</div>
    <div>${data.weather[0].description}</div>
    <div>${data.name}, ${data.sys.country}</div>
  `;
}


