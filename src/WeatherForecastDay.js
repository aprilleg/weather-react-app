import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props){
  function day() {
    let date = new Date(props.data.dt *1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat",]
    let day= days[date.getDay()];

    return day;
  }

    return (
      <div>
        <div className="WeatherForecast-day">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={32} />
        <div className="WeatherForecast-temperature">
          <span className="WeatherForecast-max">
            {Math.round(props.data.temp.max)}°
          </span>
          <span className="WeatherForecast-min">
            {Math.round(props.data.temp.min)}°
          </span>
        </div>
      </div>
    );
}