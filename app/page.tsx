import DriversTable from "./(DriversTable)/LiveDriversTable";
import Topbar from "./(Topbar)/Topbar";
import CarTelemetryConsumer from "./CarTelemetryConsumer";

export default function Home() {
  return (
    <>
      <Topbar />
      <DriversTable />
      <CarTelemetryConsumer />
    </>
  );
}
