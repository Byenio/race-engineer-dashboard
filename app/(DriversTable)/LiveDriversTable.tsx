"use client";

import {
  PacketCarDamageData,
  PacketCarStatusData,
  PacketCarTelemetryData,
  PacketLapData,
  PacketParticipantsData,
} from "f1-23-udp";
import { useEffect, useState } from "react";
import Card from "../(components)/Card";
import { socket } from "../socket";
import LiveDriversTable from "./components/DriversTable";
import DefaultDriversTable from "./default/DefaultDriversTable";

export default function DriversTable() {
  const [playerId, setPlayerId] = useState<number>(0);
  const [lapData, setLapData] = useState<PacketLapData>();
  const [participantsData, setParticipantsData] =
    useState<PacketParticipantsData>();
  const [carStatusData, setCarStatusData] = useState<PacketCarStatusData>();
  const [carDamageData, setCarDamageData] = useState<PacketCarDamageData>();
  const [carTelemetryData, setCarTelemetryData] =
    useState<PacketCarTelemetryData>();

  useEffect(() => {
    function handleLapData(data: PacketLapData) {
      setLapData(data);
      setPlayerId(data.m_header.player_car_index);
    }
    function handleParticipantsData(data: PacketParticipantsData) {
      setParticipantsData(data);
    }
    function handleCarStatusData(data: PacketCarStatusData) {
      setCarStatusData(data);
    }
    function handleCarDamageData(data: PacketCarDamageData) {
      setCarDamageData(data);
    }
    function handleCarTelemetryData(data: PacketCarTelemetryData) {
      setCarTelemetryData(data);
    }

    socket.on("lapData", handleLapData);
    socket.on("participants", handleParticipantsData);
    socket.on("carStatus", handleCarStatusData);
    socket.on("carDamage", handleCarDamageData);
    socket.on("carTelemetry", handleCarTelemetryData);

    return () => {
      socket.off("lapData", handleLapData);
      socket.off("participants", handleParticipantsData);
      socket.off("carStatus", handleCarStatusData);
      socket.off("carDamage", handleCarDamageData);
      socket.off("carTelemetry", handleCarTelemetryData);
    };
  }, []);

  const allDataValid =
    lapData ||
    carStatusData ||
    participantsData ||
    carDamageData ||
    carTelemetryData;

  if (!allDataValid) {
    return (
      <Card className="w-auto" cardName="drivers table">
        <DefaultDriversTable />
      </Card>
    );
  }

  if (
    lapData &&
    participantsData &&
    carStatusData &&
    carDamageData &&
    carTelemetryData
  ) {
    const rows = createRows({
      lapData,
      participantsData,
      carStatusData,
      carDamageData,
      carTelemetryData,
    });

    rows.sort((a, b) => a.position - b.position);

    return (
      <Card className="basis-3/5" cardName="drivers table">
        <LiveDriversTable rows={rows} playerId={playerId} />
      </Card>
    );
  }
}

type Rows = {
  driverId: number;
  position: number;
  driver: string;
  teamId: number;
  drs: number;
  gap: number;
  leader: number;
  tyre: number;
  tyreAge: number;
  pitStatus: number;
  tyreWear: number;
  lastLap: number;
  penalties: number;
};

function createRows({
  lapData,
  participantsData,
  carStatusData,
  carDamageData,
  carTelemetryData,
}: {
  lapData: PacketLapData;
  participantsData: PacketParticipantsData;
  carStatusData: PacketCarStatusData;
  carDamageData: PacketCarDamageData;
  carTelemetryData: PacketCarTelemetryData;
}) {
  let rows: Rows[] = [];

  for (let i = 0; i < 22; i++) {
    if (lapData.m_lapData[i].m_carPosition != 0) {
      const row = {
        driverId: i,
        position: lapData.m_lapData[i].m_carPosition,
        driver: participantsData.m_participants[i].m_name.replace(
          /[^a-zA-Z0-9À-ž]/g,
          ""
        ),
        teamId: participantsData.m_participants[i].m_teamId,
        drs: carTelemetryData.m_carTelemetryData[i].m_drs,
        gap: lapData.m_lapData[i].m_deltaToCarInFrontInMS,
        leader: lapData.m_lapData[i].m_deltaToRaceLeaderInMS,
        tyre: carStatusData.m_car_status_data[i].m_visual_tyre_compound,
        tyreAge: carStatusData.m_car_status_data[i].m_tyres_age_laps,
        pitStatus: lapData.m_lapData[i].m_pitStatus,
        tyreWear: Math.max(
          ...carDamageData.m_car_damage_data[i].m_tyres_damage
        ),
        lastLap: lapData.m_lapData[i].m_lastLapTimeInMS,
        penalties: lapData.m_lapData[i].m_penalties,
      };

      rows.push(row);
    }
  }

  return rows;
}
