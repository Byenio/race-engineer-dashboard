import DriversTable from "./DriversTable";

const defaultRow = {
  driverId: 0,
  position: 0,
  driverNumber: 0,
  driver: "-",
  teamId: 0,
  drsAllowed: 0,
  gap: 0,
  leader: 0,
  tyre: 0,
  tyreAge: 0,
  tyreWear: 0,
  lastLap: 0,
  penalties: 0,
};

type Rows = {
  driverId: number;
  position: number;
  driver: string;
  teamId: number;
  drsAllowed: number;
  gap: number;
  leader: number;
  tyre: number;
  tyreAge: number;
  tyreWear: number;
  lastLap: number;
  penalties: number;
};

export default function DefaultDriversTable() {
  const defaultRows: Rows[] = Array.from({ length: 22 }, () => defaultRow);

  return <DriversTable rows={defaultRows} playerId={-1} />;
}
