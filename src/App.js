// import React from "react";
import { useState } from "react";
import { InputSearchButton } from "./components/InputSearch";
import { RenderWeather } from "./components/RenderWeather";


function App() {
  const [weatherData, setWeatherData] = useState(null);
  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center">
      {/* card container */}
      <div className="bg-white shadow-lg mt-10 p-4 rounded w-full max-w-sm">
        <InputSearchButton onWeatherFetched={setWeatherData}/>
        {/* weather data display */}
        <RenderWeather weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
