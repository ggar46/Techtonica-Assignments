const express = require("express");
const cors = require("cors");
require("dotenv").config();
console.log("this is what we want", process.env);
const dataWeather = require("./data");
const coord = require("./data");

const app = express();

const PORT = 8081;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get("/", (req, res) => {
  res.json({ message: "Hello from My template ExpressJS" });
});


app.get("/api/weather/:city", (req, res) => {
  console.log("code reached here");
  const requestedCity = req.params.city;
  // const appid = df4dc696102dd6129092d84b487c1aaa
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${requestedCity}&appid=${process.env.APP_ID}&units=imperial`)
    .then(async (data) => {
    const weather = await data.json();
    res.json(weather);
});

});


// console.log that your server is up and running
app.listen(PORT, () => console.log(`Hola! Server is running on PORT ${PORT}`));