import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { FetchWeather } from "./FetchWeather";
import { RenderWeather } from "./RenderWeather";

const API_KEY = "04d9717542bdbe12532691fb8af1aad8";

export function InputSearchButton({ onWeatherFetched }) {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!inputValue) return;

    setLoading(true);
    setError("");
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}&q=${inputValue}`;
      const data = await FetchWeather(url);

      if (data.cod === 200) {
        onWeatherFetched(data);
        setError("");
      } else {
        setError("gagal mengambil data"); //temporary debug
      }
    } catch (err) {
      setError("gagal menemukan kota"); //temporary debug
      console.error(error);
    } finally {
      setInputValue("");
      setLoading(false);
    }
  };

  return (
    <>
      <form className="flex" onSubmit={handleSubmit}>
        {/* input and search button */}
        <div className="flex border rounded items-center px-2 py-2 w-full">
          <FaSearch className="h-5 w-5" />
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Enter City"
            className="pl-2 border-none focus:outline-none w-full"
          />
        </div>
        {/* button */}
        <button
          className="px-4 py-2 bg-slate-600 text-white ml-2 rounded hover:bg-blue-950"
          type="submit"
          disabled={loading}
        >
          <FaMapMarkerAlt className="w-5 h-5" />
        </button>
      </form>
    </>
  );
}
