const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dataWeather = require("./data");

const app = express();

const PORT = 8081;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get("/", (req, res) => {
  res.json({ message: "Hello from My template ExpressJS" });
});

// creates an endpoint for the route /api/weather
app.get("/api/weather/", (req, res) => {
  //const //cityName is a query parameter uses ?,  route parameter uses :
  res.json({
      name: dataWeather.weather[0].name,
      temp: dataWeather.weather[0].main.temp,
      weather: dataWeather.weather[0].main.pressure,
      clouds: dataWeather.weather[0].clouds.all,
      sunrise: dataWeather.weather[0].sys.sunrise,
      sunset: dataWeather.weather[0].sys.sunset
    });
});

// console.log that your server is up and running
app.listen(PORT, () => console.log(`Hola! Server is running on PORT ${PORT}`));