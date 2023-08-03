import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo (props){
  return (
    <div className="row">
      <div className="col-6">
        <h1>{props.data.city}</h1>
        <p>
          <CurrentDate date={props.data.date} />
        </p>
        <span className="temperature">
          {props.data.temperature}
          <span className="unit">°C</span>
        </span>
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
