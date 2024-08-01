import DriversTable from "@/app/(DriversTable)/components/DriversTable";

const defaultRow = {
  driverId: 0,
  position: 0,
  driverNumber: 0,
  driver: "-",
  teamId: 0,
  drs: 0,
  gap: 0,
  leader: 0,
  tyre: 0,
  tyreAge: 0,
  pitStatus: 0,
  tyreWear: 0,
  lastLap: 0,
  penalties: 0,
};

type Rows = {
  driverId: number;
  position: number;
  driver: string;
  teamId: number;
  drs: number;
  gap: number;
  leader: number;
  tyre: number;
  tyreAge: number;
  pitStatus: number;
  tyreWear: number;
  lastLap: number;
  penalties: number;
};

export default function DefaultDriversTable() {
  const defaultRows: Rows[] = Array.from({ length: 22 }, () => defaultRow);

  return <DriversTable rows={defaultRows} playerId={-1} />;
}
