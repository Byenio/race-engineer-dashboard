import { WeatherForecastSample } from "f1-23-udp";
import WeatherForecast from "./WeatherForecast";

const defaultForecastSample: WeatherForecastSample = {
  m_sessionType: 0,
  m_timeOffset: 0,
  m_weather: 0,
  m_trackTemperature: 0,
  m_trackTemperatureChange: 0,
  m_airTemperature: 0,
  m_airTemperatureChange: 0,
  m_rainPercentage: 0,
};

export default function DefaultWeatherForecast() {
  const defaultForecastSamples: WeatherForecastSample[] = Array.from(
    { length: 5 },
    () => defaultForecastSample
  );

  return (
    <WeatherForecast
      numForecastSamples={defaultForecastSamples.length}
      forecastSamples={defaultForecastSamples}
    />
  );
}
