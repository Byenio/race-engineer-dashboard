import { formatTime } from "@/app/utils";
import Driver from "./Driver";
import { DrsIcon } from "./DrsIcon";
import { headers } from "./headers";
import { TyreIcon } from "./TyreIcon";

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

type Headers = {
  key: string;
  label: string;
};

export default function DriversTable({
  rows,
  playerId,
}: {
  rows: Rows[];
  playerId: number;
}) {
  return (
    <table className="w-full m-auto">
      <DriversTableHead headers={headers} />
      <DriversTableBody rows={rows} playerId={playerId} />
    </table>
  );
}

function DriversTableHead({ headers }: { headers: Headers[] }) {
  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header.key}>{header.label}</th>
        ))}
      </tr>
    </thead>
  );
}

function DriversTableBody({
  rows,
  playerId,
}: {
  rows: Rows[];
  playerId: number;
}) {
  return (
    <tbody>
      {rows.map((row) => (
        <tr
          key={row.driverId}
          className={
            row.driverId === playerId
              ? "border-x-5 border-y-1 border-[#ffffff60]"
              : "border-0 rounded-full"
          }
        >
          <PositionCell position={row.position} />
          <DriverCell driver={row.driver} teamId={row.teamId} />
          <DrsCell drs={row.drs} />
          <GapCell gap={row.gap} />
          <LeaderGapCell leaderGap={row.leader} />
          <TyreCell tyre={row.tyre} />
          <TyreAgeCell tyreAge={row.tyreAge} pitStatus={row.pitStatus} />
          <TyreWearCell tyreWear={row.tyreWear} />
          <LastLapCell lastLap={row.lastLap} />
          <PenaltiesCell penalties={row.penalties} />
        </tr>
      ))}
    </tbody>
  );
}

function PositionCell({ position }: { position: number }) {
  return <td className="px-5 text-center min-w-16">{position}</td>;
}

function DriverCell({ driver, teamId }: { driver: string; teamId: number }) {
  return (
    <td className="px-5 text-center font-semibold min-w-36">
      <Driver driver={driver} teamId={teamId} />
    </td>
  );
}

function DrsCell({ drs }: { drs: number }) {
  return (
    <td className="px-5 text-center">
      <DrsIcon drsAllowed={drs} />
    </td>
  );
}

function GapCell({ gap }: { gap: number }) {
  let value: string | number = 0;
  if (gap === 0) value = "-";
  if (gap !== 0) value = formatTime(gap);
  return <td className="px-5 pr-[1.6rem] text-end min-w-32">{value}</td>;
}

function LeaderGapCell({ leaderGap }: { leaderGap: number }) {
  let value: string | number = 0;
  if (leaderGap === 0) value = "-";
  if (leaderGap !== 0) value = formatTime(leaderGap);
  return <td className="px-5 pr-[1.6rem] text-end min-w-32">{value}</td>;
}

function TyreCell({ tyre }: { tyre: number }) {
  return (
    <td className={"px-5 text-center"}>
      <TyreIcon tyre={tyre} />
    </td>
  );
}

function TyreAgeCell({
  tyreAge,
  pitStatus,
}: {
  tyreAge: number;
  pitStatus: number;
}) {
  return pitStatus === 0 ? (
    <td className="px-5 text-end min-w-20">{tyreAge}</td>
  ) : (
    <td className="px-5 text-end min-w-20 text-red-500">PIT</td>
  );
}

function TyreWearCell({ tyreWear }: { tyreWear: number }) {
  return (
    <td className="px-5 text-end min-w-20">
      {tyreWear}
      {tyreWear ? "%" : ""}
    </td>
  );
}

function LastLapCell({ lastLap }: { lastLap: number }) {
  return (
    <td className="px-5 pr-[1.6rem] text-end min-w-32">
      {formatTime(lastLap)}
    </td>
  );
}

function PenaltiesCell({ penalties }: { penalties: number }) {
  return (
    <td className="px-5 text-center min-w-20">
      {penalties ? `${penalties}s` : "-"}
    </td>
  );
}
