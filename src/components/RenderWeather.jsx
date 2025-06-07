import { HourlyForecast } from "./HourlyForecast";

export const RenderWeather = ({ weatherData }) => {
  if (!weatherData) {
    return (
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
      </div>
    );
  }

  const iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  const iconName = `https://flagsapi.com/${weatherData.sys.country}/shiny/32.png`;
  return (
    <div className="mt-4 text-center">
      <div className="flex items-center justify-center mr-5">
        <img src={iconName} className=" w-8  h-8" alt="Weather Icon" />
        <h2 className="text-xl font-semibold mx-2">{weatherData.name}</h2>
      </div>
      {/* weather icon */}
      <img
        src={iconUrl}
        alt={weatherData.weather[0].description}
        className="mx-auto h-40"
      />
      <span className="text-lg font-semibold">
        {Math.floor(weatherData.main.temp)}
      </span>{" "}
      C°
      <p className="text-sm capitalize font-semibold">
        {weatherData.weather[0].description}
      </p>
    </div>
  );
};
