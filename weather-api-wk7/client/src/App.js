import './App.css';
import { useState } from "react";
import WeatherForm from './components/weatherForm';
import WeatherCard from './components/weatherCard';

function App() {
  //const [city, setCity] = useState("");
  const [result, setResult] = useState(null);

  //A function to do the get request and set the state from the hard code data
  const loadCity = (city) => {
    fetch(`http://localhost:8081/api/weather/${city}`)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     //console.log(result)
    //     // setCity(result.weather[0].name);
    //     console.log("result=", result);
    //     setResult(result);
    //   }
      
    //   );
  }

 const handleSubmit = (e, city) =>{
  e.preventDefault();
  loadCity(city);
 }


  return (
    <div className="App">
      <WeatherForm handleSubmit={handleSubmit}/>
      {/* {!result ? <p>Please click the botton to see Data</p> : <WeatherCard data={result} /> } */}
    </div>
  );
}

export default App;
