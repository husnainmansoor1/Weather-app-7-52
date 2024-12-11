const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const apikey = "d97e7256a54a57d4ce2401dffc679470";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const Weather = async (city) => {
  const response = await fetch(url + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
  } else {
    const data = await response.json();
    console.log(data);
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if (data.weather[0].main == "Haze") {
      document.querySelector(".weather-icon").src = "images/haze.png";
    } else if (data.weather[0].main == "Clouds") {
      document.querySelector(".weather-icon").src = "images/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      document.querySelector(".weather-icon").src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      document.querySelector(".weather-icon").src = "images/snow.png";
    } else if (data.weather[0].main == "Clear") {
      document.querySelector(".weather-icon").src = "images/sun.png";
    } else if (data.weather[0].main == "Mist") {
      document.querySelector(".weather-icon").src = "images/mist.png";
    } else if (data.weather[0].main == "Drizzle") {
      document.querySelector(".weather-icon").src = "images/drizzle.png";
    }
    document.querySelector(".error").style.display = "none";
  }
};
searchBtn.addEventListener("click", () => {
  Weather(searchBox.value);
  searchBox.value = "";
});
Weather("lahore");
