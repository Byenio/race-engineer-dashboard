import { FastestLapData, PacketEventData, PenaltyData } from "f1-23-udp";

export default function Message({ messages }: { messages: PacketEventData[] }) {
  return (
    <div className="max-h-72 overflow-y-scroll ">
      {messages.map((message, idx) => {
        const { m_eventDetails: details, m_eventStringCode: code } = message;

        switch (code) {
          case "FTLP":
            const flData = details as FastestLapData;
            return (
              <div key={idx}>
                {flData.vehicleIdx} {flData.lapTime}
              </div>
            );

          case "PENA":
            const penData = details as PenaltyData;
            return (
              <div key={idx}>
                {penData.vehicleIdx} {penData.infringementType} {penData.time}s
              </div>
            );
        }

        return <div key={idx}>{message.m_eventStringCode}</div>;
      })}
    </div>
  );
}

/*
  "FTLP" - fastest lap
  "RTMT" - retirement
  "DRSE" - drs enabled
  "DRSD" - drs disabled
  "TMPT" - teammate in pits
  "CHQF" - chequered flag
  "RCWN" - race winner
  "PENA" - penalty
  "RDFL" - red flag

  "SSTA" - session started
  "SEND" - session ended
  "SPTP" - speed trap
  "STLG" - start lights
  "LGOT" - lights out
  "DTSV" - drive through served
  "SGSV" - stop go served
  "FLBK" - flashback
  "BUTN" - button
  "OVTK" - overtake
*/
