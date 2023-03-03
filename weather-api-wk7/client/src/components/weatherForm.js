import { useState } from "react";

const WeatherForm = (props) =>{
  const [userCity, changeUserCity] = useState("");

  return (
      <div className="weather">
      <h1 className="App-header">Techtonica Weather Forecast App</h1>
      <form onSubmit={props.handleSubmit}>
        <input
          id="city-name"
          type="text"
          placeholder="Please enter the city name"
          name="city"
          value={userCity}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default WeatherForm;









//works
// const WeatherForm = (props) =>{

// const [userCity, changeUserCity] = useState("");


// const handleChange = (event) => {
//   changeUserCity(event.target.value);
// }

//     return (
//         <div className="weather">
//         <h1 className="App-header">Techtonica Weather Forecast App</h1>
//         <form onSubmit={(event) => props.handleSubmit(event, userCity)}>
//           <input
//             id="city-name"
//             type="text"
//             placeholder="Please enter the city name"
//             name="city"
//             value={userCity}
//             onChange={handleChange} 
//           />
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     )
// }

// export default WeatherForm;