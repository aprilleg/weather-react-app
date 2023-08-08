import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";


export default function WeatherInfo (props){
  return (
    <div className="row section">
      <div className="col-6">
        <h1>{props.data.city}</h1>
        <p className="mb-0">
          <CurrentDate date={props.data.date} />
        </p>
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
      <div className="col-6">
        <ul>
          <li className="weatherIcon">
            <WeatherIcon code={props.data.icon} size={56} />
          </li>
          <li className="weatherDescription"> {props.data.description} </li>
          <li className="humidityTemperature">
            Humidity: <strong>{props.data.humidity}%</strong>
          </li>
          <li className="windTemperature">
            Wind: <strong>{props.data.wind} km/h</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}
