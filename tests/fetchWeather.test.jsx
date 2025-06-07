import { FetchWeather } from "../src/components/utils/FetchWeather";

describe("FetchWeather", () => {
  const mockUrl = "https://mocked.api/weather";

  it("should return weather data when fetch is successful", async () => {
    const mockWeatherData = {
      name: "Jakarta",
      main: { temp: 25 },
    };

    global.fetch = () =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockWeatherData),
      });

    const result = await FetchWeather(mockUrl);
    expect(result).toEqual(mockWeatherData);
  });

  it("should throw error when response is not ok", async () => {
    global.fetch = () =>
      Promise.resolve({
        ok: false,
      });

    await expect(FetchWeather(mockUrl)).rejects.toThrow("Failed to fetch data");
  });

  it("should throw error when fetch throws an exception", async () => {
    global.fetch = () => Promise.reject(new Error("Network down"));

    await expect(FetchWeather(mockUrl)).rejects.toThrow(
      "Fetching weather data failedNetwork down"
    );
  });
});
