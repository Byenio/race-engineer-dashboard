"use client";

import { PacketSessionData } from "f1-23-udp";
import { useEffect, useState } from "react";
import { weather } from "../(appendices)/weather";
import Card from "../(components)/Card";
import { socket } from "../socket";
import DefaultWeatherForecast from "./DefaultWeatherForecast";
import WeatherForecast from "./WeatherForecast";

export default function WeatherCard() {
  const [sessionData, setSessionData] = useState<PacketSessionData>();

  useEffect(() => {
    function handleSessionData(data: PacketSessionData) {
      setSessionData(data);
    }

    socket.on("session", handleSessionData);

    return () => {
      socket.off("session", handleSessionData);
    };
  }, []);

  if (!sessionData)
    return (
      <Card className="basis-1/3" cardName="weather">
        <div className="flex gap-12">
          <CurrentWeather currentWeather={0} trackTemp={0} airTemp={0} />
          <DefaultWeatherForecast />
        </div>
      </Card>
    );

  if (sessionData)
    return (
      <div className="flex gap-12">
        <CurrentWeather
          currentWeather={sessionData.m_weather}
          trackTemp={sessionData.m_trackTemperature}
          airTemp={sessionData.m_airTemperature}
        />
        <WeatherForecast
          numForecastSamples={sessionData.m_numWeatherForecastSamples}
          forecastSamples={sessionData.m_weatherForecastSamples}
        />
      </div>
    );
}

function CurrentWeather({
  currentWeather,
  trackTemp,
  airTemp,
}: {
  currentWeather: number;
  trackTemp: number;
  airTemp: number;
}) {
  return (
    <div>
      <div>NOW</div>
      <div>{weather[currentWeather]}</div>
      <div>{trackTemp}°</div>
      <div>{airTemp}°</div>
    </div>
  );
}
