"use client";

import {
  PacketCarDamageData,
  PacketCarStatusData,
  PacketCarTelemetryData,
} from "f1-23-udp";
import { useEffect, useState } from "react";
import Card from "../(components)/Card";
import { socket } from "../socket";
import DefaultTyresData from "./DefaultTyresData";
import LiveTyresData from "./LiveTyresData";

export default function TyresCard() {
  const [playerId, setPlayerId] = useState<number>(0);
  const [carDamageData, setCarDamageData] = useState<PacketCarDamageData>();
  const [carStatusData, setCarStatusData] = useState<PacketCarStatusData>();
  const [carTelemetryData, setCarTelemetryData] =
    useState<PacketCarTelemetryData>();

  useEffect(() => {
    function handleCarDamageData(data: PacketCarDamageData) {
      setCarDamageData(data);
      setPlayerId(data.m_header.player_car_index);
    }
    function handleCarStatusData(data: PacketCarStatusData) {
      setCarStatusData(data);
    }
    function handleCarTelemetryData(data: PacketCarTelemetryData) {
      setCarTelemetryData(data);
    }

    socket.on("carDamage", handleCarDamageData);
    socket.on("carStatus", handleCarStatusData);
    socket.on("carTelemetry", handleCarTelemetryData);

    return () => {
      socket.off("carDamage", handleCarDamageData);
      socket.off("carStatus", handleCarStatusData);
      socket.off("carTelemetry", handleCarTelemetryData);
    };
  }, []);

  const allDataValid = carDamageData || carStatusData || carTelemetryData;

  if (!allDataValid) {
    return (
      <Card
        cardName="Tyres"
        className="basis-1/4 flex flex-wrap justify-center"
      >
        <DefaultTyresData />
      </Card>
    );
  }

  if (carDamageData && carStatusData && carTelemetryData) {
    return (
      <LiveTyresData
        tyreDamage={carDamageData.m_car_damage_data[playerId].m_tyres_damage}
        actualTyreCompound={
          carStatusData.m_car_status_data[playerId].m_actual_tyre_compound
        }
        visualTyreCompound={
          carStatusData.m_car_status_data[playerId].m_visual_tyre_compound
        }
        tyreAge={carStatusData.m_car_status_data[playerId].m_tyres_age_laps}
        brakeTemps={
          carTelemetryData.m_carTelemetryData[playerId].m_brakesTemperature
        }
        tyreSurfaceTemps={
          carTelemetryData.m_carTelemetryData[playerId]
            .m_tyresSurfaceTemperature
        }
        tyreInnerTemps={
          carTelemetryData.m_carTelemetryData[playerId].m_tyresInnerTemperature
        }
        tyrePressures={
          carTelemetryData.m_carTelemetryData[playerId].m_tyresPressure
        }
      />
    );
  }
}
