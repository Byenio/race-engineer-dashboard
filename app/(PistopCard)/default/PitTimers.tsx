import PitTimers from "../components/PitTimers";

const defaultPitTimersData = {
  pitlaneTimer: 0,
  pitstopTimer: 0,
  pitPenalty: 0,
};

export default function DefaultPitTimers() {
  return <PitTimers {...defaultPitTimersData} />;
}
