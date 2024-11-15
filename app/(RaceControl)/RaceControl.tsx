"use client";

import { PacketEventData } from "f1-23-udp";
import { useEffect, useState } from "react";
import Card from "../(components)/Card";
import { socket } from "../socket";
import Message from "./components/Message";
import DefaultMessage from "./default/Message";

const allowedCodes = [
  "FTLP",
  "RTMT",
  "DRSE",
  "DRSD",
  "TMPT",
  "CHQF",
  "RCWN",
  "PENA",
  "RDFL",
  "OVTK",
];

export default function RaceControl() {
  const [eventData, setEventData] = useState<PacketEventData[]>([]);

  useEffect(() => {
    function handleEventData(data: PacketEventData) {
      if (allowedCodes.includes(data.m_eventStringCode)) {
        setEventData((prev) => [...prev, data]);
      }
    }

    socket.on("event", handleEventData);

    return () => {
      socket.off("event", handleEventData);
    };
  }, []);

  if (!eventData) {
    return (
      <Card className="basis-4/5" cardName={"race control"}>
        <DefaultMessage />
      </Card>
    );
  }

  return (
    <Card className="basis-4/5" cardName={"race control"}>
      <Message messages={eventData} />
    </Card>
  );
}

/*
  "SSTA" - session started
  "SEND" - session ended
  "FTLP" - fastest lap
  "RTMT" - retirement
  "DRSE" - drs enabled
  "DRSD" - drs disabled
  "TMPT" - teammate in pits
  "CHQF" - chequered flag
  "RCWN" - race winner
  "PENA" - penalty
  "SPTP" - speed trap
  "STLG" - start lights
  "LGOT" - lights out
  "DTSV" - drive through served
  "SGSV" - stop go served
  "FLBK" - flashback
  "BUTN" - button
  "RDFL" - red flag
  "OVTK" - overtake
*/
