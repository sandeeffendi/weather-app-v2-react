import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./HourlyForecast.css";
import { useRef } from "react";

// export function HourlyForecast({ forecastData }) {

export const HourlyForecast = ({ forecastData }) => {
  const scrollRef = useRef(null);
  if (!forecastData) {
    return;
  }

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  const today = new Date().toLocaleDateString("id-ID");
  const todayForecasts = forecastData.filter((item) => {
    const itemDate = new Date(item.dt * 1000).toLocaleDateString("id-ID");
    return itemDate === today;
  });

  return (
    <div className="relative mt-6">
      <div
        ref={scrollRef}
        className="flex gap-4 mx-10 py-2 overflow-x-auto scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {todayForecasts.map((hourly, index) => {
          const time = new Date(hourly.dt * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          const iconUrl = `https://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`;
          const temp = Math.round(hourly.main.temp);
          return (
            <div
              key={index}
              className="flex flex-col items-center shadow-lg bg-slate-200 py-2 rounded px-4"
            >
              <p className="text-sm capitalize font-semibold whitespace-nowrap">{time}</p>
              <img src={iconUrl} alt="Hourly Icon" className="w-10 mx-auto" />
              <span className="text-sm capitalize font-semibold whitespace-nowrap">{temp} C&#176;</span>
            </div>
          );
        })}
      </div>
      {/* scroll button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 bg-slate-500 text-white transform -translate-y-1 rounded-full w-8 h-8 flex items-center justify-center "
      >
        <FaChevronLeft className="w-4 w-4" />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 bg-slate-500 text-white transform -translate-y-1 rounded-full w-8 h-8 flex items-center justify-center "
      >
        <FaChevronRight className="w-4 w-4" />
      </button>
    </div>
  );
};
