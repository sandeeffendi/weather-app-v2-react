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

  const today = new Date();
  const todayForecasts = forecastData.slice(0, 8);

  todayForecasts.filter((item) => {
    const itemDate = new Date(item.dt * 1000);
    return (
      itemDate.getDate() === today.getDate() &&
      itemDate.getMonth() === today.getMonth() &&
      itemDate.getFullYear() === today.getFullYear()
    );
  });

  return (
    <div className="relative mt-6">
      <div
        ref={scrollRef}
        className="flex gap-4 mx-10 py-2 overflow-x-auto scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {todayForecasts.map((hourly, index) => {
          const time = new Date(hourly.dt * 1000);
          const hour = String(time.getHours()).padStart(2, "0");
          const minute = String(time.getMinutes()).padStart(2, "0");
          const iconUrl = `https://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`;
          const temp = Math.round(hourly.main.temp);
          return (
            <div
              key={index}
              className="flex flex-col items-center shadow-lg bg-slate-200 py-2 rounded px-4"
            >
              <p className="text-sm capitalize font-semibold whitespace-nowrap">
                {hour}:{minute}
              </p>
              <img src={iconUrl} alt="Hourly Icon" className="w-10 mx-auto" />
              <span className="text-sm capitalize font-semibold whitespace-nowrap">
                {temp} C&#176;
              </span>
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
