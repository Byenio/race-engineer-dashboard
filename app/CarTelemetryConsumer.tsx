"use client";

import { PacketCarTelemetryData } from "f1-23-udp";
import { useEffect, useState } from "react";
import { socket } from "./socket";
import Speed from "./Speed";

export default function CarTelemetryConsumer() {
  const [playerId, setPlayerId] = useState<number>(0);
  const [carTelemetryData, setCarTelemetryData] =
    useState<PacketCarTelemetryData>();

  useEffect(() => {
    const handleCarTelemetry = (data: PacketCarTelemetryData) => {
      setCarTelemetryData(data);
      setPlayerId(data.m_header.player_car_index);
    };

    socket.on("carTelemetry", (data: PacketCarTelemetryData) => {
      handleCarTelemetry(data);
    });

    return () => {
      socket.off("carTelemetry", handleCarTelemetry);
    };
  }, []);

  return (
    <>
      <Speed speed={carTelemetryData?.m_carTelemetryData[playerId].m_speed} />
    </>
  );
}
