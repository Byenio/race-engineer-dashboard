type PitTimersData = {
  pitlaneTimer: number;
  pitstopTimer: number;
  pitPenalty: number;
};

export default function PitTimers(pitTimersData: PitTimersData) {
  return (
    <>
      <PitlaneTimer time={pitTimersData.pitlaneTimer} />
      <PitTimer time={pitTimersData.pitstopTimer} />
      <PitPenalty shouldServe={pitTimersData.pitPenalty} />
    </>
  );
}

function PitlaneTimer({ time }: { time: number }) {
  return <div>Pitlane: {time}s</div>;
}

function PitTimer({ time }: { time: number }) {
  return <div>Pitstop: {time}s</div>;
}

function PitPenalty({ shouldServe }: { shouldServe: number }) {
  return <div>{shouldServe ? "Serving penalty" : ""}</div>;
}
