function showTempereture(response) {
  let temperetureElement = document.querySelector("#current-temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#current-city");

  cityElement.innerHTML = response.data.city;
  temperetureElement.innerHTML = response.data.temperature.current;

  temperetureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "56o3d075ed13bd29afc9ftf3ccaa04e3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(showTempereture);
}

function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", showCity);
