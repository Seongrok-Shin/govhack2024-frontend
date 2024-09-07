import React from 'react';
import logo from './logo.svg';
import './App.css';
import { weatherForecastClient } from './api/api';

async function App() {
  // Commented out as CORS currently blocks.
  // This is the example on how to call API
  
  // const forecast = await weatherForecastClient.getWeatherForecast();
  // console.log("RES", forecast);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
