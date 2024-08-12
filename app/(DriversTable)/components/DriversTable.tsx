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
    <table>
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
              ? "bg-[#CCFF0025]"
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
  return <td className="px-5 text-center">{position}</td>;
}

function DriverCell({ driver, teamId }: { driver: string; teamId: number }) {
  return (
    <td className="px-5 inline-flex">
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

function TyreAgeCell({
  tyreAge,
  pitStatus,
}: {
  tyreAge: number;
  pitStatus: number;
}) {
  return pitStatus === 0 ? (
    <td className="px-5 text-end">{tyreAge}</td>
  ) : (
    <td className="px-5 text-end text-red-500">PIT</td>
  );
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
