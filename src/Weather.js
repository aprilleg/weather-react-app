import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <h1>Philippines</h1>
          <p className="date-time">Wednesday 01:32</p>
          <span className="temperature">
            28<span className="unit">°C</span>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png"
                alt="weather status"
              />
            </li>
            <li>Clear</li>
            <li>Humidity: 91%</li>
            <li>Wind: 21 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
