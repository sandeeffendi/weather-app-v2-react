import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { HourlyForecast } from "./components/HourlyForecast";

function App() {
  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center">
      {/* card container */}
      <div className="bg-white shadow-lg mt-10 p-4 rounded w-full max-w-sm">
        <div className="flex">
          {/* input and search button */}
          <div className="flex border rounded items-center px-2 py-2 w-full">
            <FaSearch className="h-5 w-5" />
            <input
              type="text"
              placeholder="Enter City"
              className="pl-2 border-none focus:outline-none w-full"
            />
          </div>
          {/* button */}
          <button className="px-4 py-2 bg-slate-600 text-white ml-2 rounded hover:bg-blue-950">
            <FaMapMarkerAlt className="w-5 h-5" />
          </button>
        </div>
        {/* weather data display */}
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold">Jakarta</h2>
          {/* weather icon */}
          <img
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="Weather Ico"
            className="mx-auto h-40"
          />
          <span className="text-lg font-semibold">2</span> C°
          <p className="text-sm capitalize font-semibold">Cloudy</p>
          {/* hourly forecast */}
          <HourlyForecast />
        </div>
      </div>
    </div>
  );
}

export default App;
