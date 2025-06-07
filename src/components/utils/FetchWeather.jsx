export const FetchWeather = async (
  url = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=04d9717542bdbe12532691fb8af1aad8"
) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const weatherData = await res.json();
    return weatherData;
  } catch (error) {
    throw new Error("Fetching weather data failed" + error.message);
  }
};
