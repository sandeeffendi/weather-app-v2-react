import { HourlyForecast } from "./HourlyForecast";

export const RenderWeather = ({weatherData}) => {
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
        <HourlyForecast />
      </div>
    );
  }

  const iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  return (
    <div className="mt-4 text-center">
      <h2 className="text-xl font-semibold">{weatherData.name}</h2>
      {/* weather icon */}
      <img
        src={iconUrl}
        alt={weatherData.weather[0].description}
        className="mx-auto h-40"
      />
      <span className="text-lg font-semibold">{weatherData.main.temp}</span> C°
      <p className="text-sm capitalize font-semibold">
        {weatherData.weather[0].description}
      </p>
      {/* hourly forecast */}
      <HourlyForecast />
    </div>
  );
};
