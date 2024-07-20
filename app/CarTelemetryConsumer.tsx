"use client";

import { PacketCarDamageData, PacketCarTelemetryData } from "f1-23-udp";
import { useEffect, useState } from "react";
import { socket } from "./socket";
import Speed from "./Speed";
import Tyres from "./Tyres";

export default function CarTelemetryConsumer() {
  const [playerId, setPlayerId] = useState<number>(0);
  const [carTelemetryData, setCarTelemetryData] =
    useState<PacketCarTelemetryData>();
  const [carDamageData, setCarDamageData] = useState<PacketCarDamageData>();

  useEffect(() => {
    const handleCarTelemetry = (data: PacketCarTelemetryData) => {
      setCarTelemetryData(data);
      setPlayerId(data.m_header.player_car_index);
    };

    const handleCarDamage = (data: PacketCarDamageData) => {
      setCarDamageData(data);
      setPlayerId(data.m_header.player_car_index);
    };

    socket.on("carTelemetry", (data: PacketCarTelemetryData) => {
      handleCarTelemetry(data);
    });

    socket.on("carDamage", (data: PacketCarDamageData) => {
      handleCarDamage(data);
    });

    return () => {
      socket.off("carTelemetry", handleCarTelemetry);
      socket.off("carDamage", handleCarDamage);
    };
  }, []);

  return (
    <>
      <Speed speed={carTelemetryData?.m_carTelemetryData[playerId].m_speed} />
      <Tyres
        tyreTemps={
          carTelemetryData?.m_carTelemetryData[playerId].m_tyresInnerTemperature
        }
        tyreWear={carDamageData?.m_car_damage_data[playerId].m_tyres_damage}
      />
    </>
  );
}
