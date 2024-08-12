import { sessionTypeArray } from "@/app/(appendices)/sessionType";
import { trackIdArray } from "@/app/(appendices)/trackId";
import { NavbarContent, NavbarItem } from "@nextui-org/navbar";

type SessionType = number | undefined;

type TrackId = number | undefined;

export default function SessionInfo({
  sessionType,
  trackId,
}: {
  sessionType: SessionType;
  trackId: TrackId;
}) {
  let sessionInfo: string;

  if (!sessionType || !trackId) sessionInfo = "no live session";
  else
    sessionInfo = `${sessionTypeArray[sessionType]} at ${trackIdArray[trackId]}`;

  return (
    <NavbarContent>
      <NavbarItem>{sessionInfo}</NavbarItem>
    </NavbarContent>
  );
}
