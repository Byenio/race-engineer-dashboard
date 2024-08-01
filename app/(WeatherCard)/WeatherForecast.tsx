import { WeatherForecastSample } from "f1-23-udp";
import { weather } from "../(appendices)/weather";

export default function WeatherForecast({
  numForecastSamples,
  forecastSamples,
}: {
  numForecastSamples: number;
  forecastSamples: WeatherForecastSample[];
}) {
  const samples = [];
  for (let i = 0; i < numForecastSamples; i++) {
    samples.push(
      <div>
        <div>{forecastSamples[i].m_timeOffset} min</div>
        <div>{weather[forecastSamples[i].m_weather]}</div>
        <div>{forecastSamples[i].m_trackTemperature}°</div>
        <div>{forecastSamples[i].m_airTemperature}°</div>
        <div>{forecastSamples[i].m_rainPercentage}%</div>
      </div>
    );
  }

  return <>{samples}</>;
}
