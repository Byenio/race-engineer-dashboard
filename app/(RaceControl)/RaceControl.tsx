"use client";

import { PacketEventData } from "f1-23-udp";
import { useEffect, useState } from "react";
import { socket } from "../socket";
import Card from "../(components)/Card";
import DefaultMessage from "./default/Message";
import Message from "./components/Message";

export default function RaceControl() {
  const [message, setMessage] = useState();
  const [eventData, setEventData] = useState<PacketEventData>();

  useEffect(() => {
    function handleEventData(data: PacketEventData) {
      setEventData(data);
    }

    socket.on("event", handleEventData);

    return () => {
      socket.off("event", handleEventData);
    };
  }, []);

  if (!eventData) {
    return (
      <Card className="basis-1/4" cardName={"race control"}>
        <DefaultMessage />
      </Card>
    );
  }

  return (
    <Card className="basis-1/4" cardName={"race control"}>
      <Message />
    </Card>
  );
}
