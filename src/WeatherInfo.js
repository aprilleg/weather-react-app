import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo (props){
  return (
    <div className="row">
      <div className="col-6">
        <h1>{props.data.city}</h1>
        <p className="mb-0">
          <CurrentDate date={props.data.date} />
        </p>
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
      <div className="col-6">
        <ul>
          <li>
            <WeatherIcon code={props.data.icon} />
          </li>
          <li> {props.data.description} </li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
