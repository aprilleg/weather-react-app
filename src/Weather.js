import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function showResponse(response){
    console.log(response.data);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
    });
    setReady(true);
  }
  function search(){
    const apiKey = "ab8e7ef210556986d1c9a75d6007b825";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search(city);
  }
  function CityChange(event){
    event.preventDefault();
    setCity(event.target.value);
  }

  if (ready) {
     return (
       <div className="Weather">
         <form onSubmit={handleSubmit}>
           <div className="row">
             <div className="col-9">
               <input
                 type="Search"
                 placeholder="Enter a city.."
                 className="form-control"
                 autoFocus="on"
                 onChange={CityChange}
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
         <WeatherInfo data={weatherData} />
       </div>
     );
  } else {
    search();
    return "Loading...";

  }
}
