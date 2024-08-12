import Card from "./(components)/Card";
import DriversTable from "./(DriversTable)/LiveDriversTable";
import PitstopCard from "./(PistopCard)/PitstopCard";
import RaceControl from "./(RaceControl)/RaceControl";
import Topbar from "./(Topbar)/Topbar";
import TyresCard from "./(TyresCard)/TyresCard";
import WeatherCard from "./(WeatherCard)/WeatherCard";
import CarTelemetryConsumer from "./CarTelemetryConsumer";

export default function Home() {
  return (
    <div className="flex flex-wrap gap-y-4 gap-x-6 justify-center">
      <Topbar />
      <DriversTable />
      <Card className="flex flex-col gap-y-4" noBorder>
        <WeatherCard />
        <RaceControl />
      </Card>
      <TyresCard />
      <PitstopCard />
      <CarTelemetryConsumer />
    </div>
  );
}
