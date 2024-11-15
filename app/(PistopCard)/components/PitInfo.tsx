import {
  ButtonsData,
  DriveThroughPenaltyServedData,
  FastestLapData,
  FlashbackData,
  OvertakeData,
  PenaltyData,
  RaceWinnerData,
  RetirementData,
  SpeedTrapData,
  StartLightsData,
  StopGoPenaltyServedData,
  TeamMateInPitsData,
} from "f1-23-udp";

type EventDetails =
  | FastestLapData
  | RetirementData
  | TeamMateInPitsData
  | RaceWinnerData
  | PenaltyData
  | SpeedTrapData
  | StartLightsData
  | DriveThroughPenaltyServedData
  | StopGoPenaltyServedData
  | FlashbackData
  | ButtonsData
  | OvertakeData;

type PitInfoData = {
  pitStatus: number;
  pitSpeedLimit: number;
  numPitStops: number;
  pitWindowIdeal: number;
  pitWindowLatest: number;
  pitRejoinPosition: number;
  eventStringCode: string;
  eventDetails: EventDetails | null;
};

export default function PitInfo(pitInfoData: PitInfoData) {
  // if (eventData.m_eventStringCode === "TeamMateInPits") {
  //   <TeammateInPits teammateInPits={eventData.m_eventStringCode} />;
  // }

  return (
    <div>
      <PitStatus pitStatus={pitInfoData.pitStatus} />
      <PitSpeedLimit pitSpeedLimit={pitInfoData.pitSpeedLimit} />
      <PitsNum pitsNum={pitInfoData.numPitStops} />
      <PitWindow
        pitWindowStart={pitInfoData.pitWindowIdeal}
        pitWindowEnd={pitInfoData.pitWindowLatest}
        rejoinPos={pitInfoData.pitRejoinPosition}
      />
    </div>
  );
}

function PitStatus({ pitStatus }: { pitStatus: number }) {
  return <div>Status: {pitStatus}</div>;
}

function PitSpeedLimit({ pitSpeedLimit }: { pitSpeedLimit: number }) {
  return <div>Pit limiter: {pitSpeedLimit}km/h</div>;
}

function PitsNum({ pitsNum }: { pitsNum: number }) {
  return <div>Pits: {pitsNum}</div>;
}

function TeammateInPits({ teammateInPits }: { teammateInPits: string }) {
  return <div>{teammateInPits}</div>;
}

function PitWindow({
  pitWindowStart,
  pitWindowEnd,
  rejoinPos,
}: {
  pitWindowStart: number;
  pitWindowEnd: number;
  rejoinPos: number;
}) {
  return (
    <div>
      Pit window: {pitWindowStart} - {pitWindowEnd} [P{rejoinPos}]
    </div>
  );
}
