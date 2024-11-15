"use client";

import { PacketEventData, PacketLapData, PacketSessionData } from "f1-23-udp";
import { useEffect, useState } from "react";
import Card from "../(components)/Card";
import { socket } from "../socket";
import PitInfo from "./components/PitInfo";
import PitTimers from "./components/PitTimers";
import DefaultPitInfo from "./default/PitInfo";
import DefaultPitTimers from "./default/PitTimers";

export default function PitstopCard() {
  const [sessionData, setSessionData] = useState<PacketSessionData>();
  const [lapData, setLapData] = useState<PacketLapData>();
  const [eventData, setEventData] = useState<PacketEventData>();

  useEffect(() => {
    function handleSessionData(data: PacketSessionData) {
      setSessionData(data);
    }
    function handleLapData(data: PacketLapData) {
      setLapData(data);
    }
    function handleEventData(data: PacketEventData) {
      setEventData(data);
    }

    socket.on("session", handleSessionData);
    socket.on("lapData", handleLapData);
    socket.on("event", handleEventData);

    return () => {
      socket.off("session", handleSessionData);
      socket.off("lapData", handleLapData);
      socket.off("event", handleEventData);
    };
  }, []);

  if (!sessionData || !lapData || !eventData) {
    return (
      <Card className="basis-1/4" cardName="pit info">
        <DefaultPitInfo />
        <DefaultPitTimers />
      </Card>
    );
  }

  if (sessionData && lapData && eventData) {
    const livePitInfoData = {
      pitStatus: lapData.m_lapData[0].m_pitStatus,
      pitSpeedLimit: sessionData.m_pitSpeedLimit,
      numPitStops: lapData.m_lapData[0].m_numPitStops,
      pitWindowIdeal: sessionData.m_pitStopWindowIdealLap,
      pitWindowLatest: sessionData.m_pitStopWindowLatestLap,
      pitRejoinPosition: sessionData.m_pitStopRejoinPosition,
      eventStringCode: eventData.m_eventStringCode,
      eventDetails: eventData.m_eventDetails,
    };

    const livePitTimersData = {
      pitlaneTimer: lapData.m_lapData[0].m_pitLaneTimeInLaneInMS,
      pitstopTimer: lapData.m_lapData[0].m_pitStopTimerInMS,
      pitPenalty: lapData.m_lapData[0].m_pitStopShouldServePen,
    };

    return (
      <Card className="basis-1/4" cardName="pit info">
        <PitInfo {...livePitInfoData} />
        <PitTimers {...livePitTimersData} />
      </Card>
    );
  }
}
