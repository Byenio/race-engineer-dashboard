import { teams } from "@/app/(appendices)/teams";
import Image from "next/image";

export default function TeamIcon({ teamId }: { teamId: number }) {
  const team = teams[teamId];

  return (
    <div className="inline-flex items-center mx-1">
      <div className="flex p-0.5 bg-white content-center justify-center rounded-md">
        <Image
          src={`/team-icons/${team.image}`}
          alt="team logo"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
