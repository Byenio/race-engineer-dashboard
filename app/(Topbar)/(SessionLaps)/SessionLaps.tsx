import { NavbarContent, NavbarItem } from "@nextui-org/navbar";

type TotalLaps = number | undefined;
const defaultTotalLaps = 0;

type CurrentLap = number | undefined;
const defaultCurrentLap = 0;

export default function SessionLaps({
  totalLaps = defaultTotalLaps,
  currentLap = defaultCurrentLap,
}: {
  totalLaps: TotalLaps;
  currentLap: CurrentLap;
}) {
  return (
    <NavbarContent>
      <NavbarItem>
        Lap: {currentLap}/{totalLaps}
      </NavbarItem>
    </NavbarContent>
  );
}
