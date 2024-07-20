import { NavbarContent, NavbarItem } from "@nextui-org/navbar";

type TrackTemperature = number | undefined;
const defaultTrackTemperature = 0;

type AirTemperature = number | undefined;
const defaultAirTemperature = 0;

export default function Temperature({
  trackTemperature = defaultTrackTemperature,
  airTemperature = defaultAirTemperature,
}: {
  trackTemperature: TrackTemperature;
  airTemperature: AirTemperature;
}) {
  return (
    <NavbarContent>
      <NavbarItem>Track: {trackTemperature}°</NavbarItem>
      <NavbarItem>Air: {airTemperature}°</NavbarItem>
    </NavbarContent>
  );
}
