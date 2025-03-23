import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://portfolio-georgia-lee.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Georgia Lee
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/georgia-lee04/react-project-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
