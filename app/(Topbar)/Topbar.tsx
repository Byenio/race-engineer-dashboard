"use client";

import { Navbar } from "@nextui-org/navbar";
import { PacketLapData, PacketSessionData } from "f1-23-udp";
import { useEffect, useState } from "react";
import { socket } from "../socket";
import StatusChip from "../StatusChip";
import SessionInfo from "./(SessionInfo)/SessionInfo";
import SessionLaps from "./(SessionLaps)/SessionLaps";
import Temperature from "./(Temperature)/Temperature";

export default function Topbar() {
  const [isConnected, setIsConnected] = useState(false);

  const [playerId, setPlayerId] = useState<number>(0);
  const [sessionData, setSessionData] = useState<PacketSessionData>();
  const [lapData, setLapData] = useState<PacketLapData>();

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
    }
    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    function handleSessionData(data: PacketSessionData) {
      setSessionData(data);
      setPlayerId(data.m_header.player_car_index);
    }
    function handleLapData(data: PacketLapData) {
      setLapData(data);
    }

    socket.on("session", handleSessionData);
    socket.on("lapData", handleLapData);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);

      socket.off("session", handleSessionData);
      socket.off("lapData", handleLapData);
    };
  }, []);

  return (
    <Navbar>
      <Temperature
        trackTemperature={sessionData?.m_trackTemperature}
        airTemperature={sessionData?.m_airTemperature}
      />
      <SessionInfo
        sessionType={sessionData?.m_sessionType}
        trackId={sessionData?.m_trackId}
      />
      <SessionLaps
        totalLaps={sessionData?.m_totalLaps}
        currentLap={lapData?.m_lapData[playerId].m_currentLapNum}
      />
      <StatusChip isConnected={isConnected} />
    </Navbar>
  );
}
