import { sessionTypeArray } from "@/app/(appendices)/sessionType";
import { trackIdArray } from "@/app/(appendices)/trackId";
import { NavbarContent, NavbarItem } from "@nextui-org/navbar";

type SessionType = number | undefined;
const defaultSessionType = 0;

type TrackId = number | undefined;
const defaultTrackId = 0;

export default function SessionInfo({
  sessionType = defaultSessionType,
  trackId = defaultTrackId,
}: {
  sessionType: SessionType;
  trackId: TrackId;
}) {
  return (
    <NavbarContent>
      <NavbarItem>
        {sessionTypeArray[sessionType]} at {trackIdArray[trackId]}
      </NavbarItem>
    </NavbarContent>
  );
}
