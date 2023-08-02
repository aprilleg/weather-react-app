import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This was coded by Aprille Guevarra, and is{" "}
          <a href="https://github.com/aprilleg/weather-react-app">
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
