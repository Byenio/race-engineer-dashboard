import PitInfo from "../components/PitInfo";

const defaultPitInfoData = {
  pitStatus: 0,
  pitSpeedLimit: 0,
  numPitStops: 0,
  pitWindowIdeal: 0,
  pitWindowLatest: 0,
  pitRejoinPosition: 0,
  eventStringCode: "",
  eventDetails: null,
};

export default function DefaultPitInfo() {
  return <PitInfo {...defaultPitInfoData} />;
}
