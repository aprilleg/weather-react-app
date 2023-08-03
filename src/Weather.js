import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function showResponse(response){
    console.log(response.data);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      iconUrl: `https://ssl.gstatic.com/onebox/weather/64/thunderstorms.png`,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
    });
    setReady(true);
  }

  
  if (ready) {
     return (
       <div className="Weather">
         <form>
           <div className="row">
             <div className="col-9">
               <input
                 type="Search"
                 placeholder="Enter a city.."
                 className="form-control"
                 autoFocus="on"
               />
             </div>
             <div className="col-3">
               <input
                 type="submit"
                 value="Search"
                 className="btn btn-primary w-100"
               />
             </div>
           </div>
         </form>
         <div className="row">
           <div className="col-6">
             <h1>{weatherData.city}</h1>
             <p className="date-time">Wednesday 01:32</p>
             <span className="temperature">
               {weatherData.temperature}
               <span className="unit">°C</span>
             </span>
           </div>
           <div className="col-6">
             <ul>
               <li>
                 <img
                   src={weatherData.iconUrl}
                   alt={weatherData.description}
                 />
               </li>
               <li> {weatherData.description} </li>
               <li>Humidity: {weatherData.humidity}%</li>
               <li>Wind: {weatherData.wind} km/h</li>
             </ul>
           </div>
         </div>
       </div>
     );
  } else {
    const apiKey = "ab8e7ef210556986d1c9a75d6007b825";
    let city = "Tokyo";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showResponse);

    return "Loading...";

  }
}
