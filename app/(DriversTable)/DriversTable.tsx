import { DrsIcon } from "./DrsIcon";
import { headers } from "./headers";
import TeamIcon from "./TeamIcon";
import { TyreIcon } from "./TyreIcon";

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
    <table>
      <DriversTableHead headers={headers} />
      <DriversTableBody rows={rows} playerId={playerId} />
    </table>
  );
}

function DriversTableHead({ headers }: { headers: Headers[] }) {
  return (
    <thead>
      {headers.map((header) => (
        <th key={header.key}>{header.label}</th>
      ))}
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
              ? "border-0 border-y-1 border-gray-500"
              : "border-0 rounded-full"
          }
        >
          <PositionCell position={row.position} />
          <DriverCell driver={row.driver} teamId={row.teamId} />
          <DrsAllowedCell drsAllowed={row.drsAllowed} />
          <GapCell gap={row.gap} />
          <LeaderGapCell leaderGap={row.leader} />
          <TyreCell tyre={row.tyre} />
          <TyreAgeCell tyreAge={row.tyreAge} />
          <TyreWearCell tyreWear={row.tyreWear} />
          <LastLapCell lastLap={row.lastLap} />
          <PenaltiesCell penalties={row.penalties} />
        </tr>
      ))}
    </tbody>
  );
}

function PositionCell({ position }: { position: number }) {
  return <td className="px-5 text-center">{position}</td>;
}

function DriverCell({ driver, teamId }: { driver: string; teamId: number }) {
  return (
    <td className="px-5">
      <TeamIcon teamId={teamId} />
      {driver}
    </td>
  );
}

function DrsAllowedCell({ drsAllowed }: { drsAllowed: number }) {
  return (
    <td className="px-5 text-center">
      <DrsIcon drsAllowed={drsAllowed} />
    </td>
  );
}

function GapCell({ gap }: { gap: number }) {
  return <td className="px-5 text-end">{formatTime(gap)}</td>;
}

function LeaderGapCell({ leaderGap }: { leaderGap: number }) {
  return <td className="px-5 text-end">{formatTime(leaderGap)}</td>;
}

function TyreCell({ tyre }: { tyre: number }) {
  return (
    <td className={"px-5 text-center"}>
      <TyreIcon tyre={tyre} />
    </td>
  );
}

function TyreAgeCell({ tyreAge }: { tyreAge: number }) {
  return <td className="px-5 text-end">{tyreAge}</td>;
}

function TyreWearCell({ tyreWear }: { tyreWear: number }) {
  return <td className="px-5 text-end">{tyreWear}</td>;
}

function LastLapCell({ lastLap }: { lastLap: number }) {
  return <td className="px-5 text-end">{formatTime(lastLap)}</td>;
}

function PenaltiesCell({ penalties }: { penalties: number }) {
  return <td className="px-5 text-end">{penalties}s</td>;
}

function formatTime(time: number): string {
  const totalSeconds = Math.floor(time / 1000);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const milliseconds = time % 1000;

  const paddedMilliseconds = String(milliseconds).padStart(3, "0");

  if (minutes > 0) {
    const paddedSeconds = String(seconds).padStart(2, "0");
    return `${minutes}:${paddedSeconds}.${paddedMilliseconds}`;
  }

  return `${seconds}.${paddedMilliseconds}`;
}
