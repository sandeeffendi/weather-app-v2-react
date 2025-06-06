import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./HourlyForecast.css";
import react from "react";
import { useRef } from "react";

export function HourlyForecast() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <div className="relative mt-6">
      <div
        ref={scrollRef}
        className="flex gap-4 mx-10 py-2 overflow-x-auto scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* one hour */}
        <div className="flex flex-col items-center shadow-lg bg-slate-200 py-2 rounded px-4">
          <p>14:00</p>
          <img
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="Hourly Icon"
            className="w-10 mx-auto"
          />
          <span>5 C&#176;</span>
        </div>
        <div className="flex flex-col items-center shadow-lg bg-slate-200 py-2 rounded px-4">
          <p>14:00</p>
          <img
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="Hourly Icon"
            className="w-10 mx-auto"
          />
          <span>5 C&#176;</span>
        </div>
        <div className="flex flex-col items-center shadow-lg bg-slate-200 py-2 rounded px-4">
          <p>14:00</p>
          <img
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="Hourly Icon"
            className="w-10 mx-auto"
          />
          <span>5 C&#176;</span>
        </div>
        <div className="flex flex-col items-center shadow-lg bg-slate-200 py-2 rounded px-4">
          <p>14:00</p>
          <img
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="Hourly Icon"
            className="w-10 mx-auto"
          />
          <span>5 C&#176;</span>
        </div>
        <div className="flex flex-col items-center shadow-lg bg-slate-200 py-2 rounded px-4">
          <p>14:00</p>
          <img
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="Hourly Icon"
            className="w-10 mx-auto"
          />
          <span>5 C&#176;</span>
        </div>
        <div className="flex flex-col items-center shadow-lg bg-slate-200 py-2 rounded px-4">
          <p>14:00</p>
          <img
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="Hourly Icon"
            className="w-10 mx-auto"
          />
          <span>5 C&#176;</span>
        </div>
        <div className="flex flex-col items-center shadow-lg bg-slate-200 py-2 rounded px-4">
          <p>14:00</p>
          <img
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="Hourly Icon"
            className="w-10 mx-auto"
          />
          <span>5 C&#176;</span>
        </div>
        <div className="flex flex-col items-center shadow-lg bg-slate-200 py-2 rounded px-4">
          <p>14:00</p>
          <img
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="Hourly Icon"
            className="w-10 mx-auto"
          />
          <span>5 C&#176;</span>
        </div>
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
}
