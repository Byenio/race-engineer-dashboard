import { teams } from "@/app/(appendices)/teams";

type Colors = {
  [key: string]: string;
};

export default function Driver({
  driver,
  teamId,
}: {
  driver: string;
  teamId: number;
}) {
  const team = teams[teamId];

  const colors: Colors = {
    mercedes: "text-[#6CD3BF]",
    ferrari: "text-[#F91536]",
    redbull: "text-[#3671C6]",
    williams: "text-[#37BEDD]",
    astonmartin: "text-[#358C75]",
    alpine: "text-[#2293D1]",
    alphatauri: "text-[#5E8FAA]",
    haas: "text-[#B6BABD]",
    mclaren: "text-[#F58020]",
    alpharomeo: "text-[#C92D4B]",
    prgrs: "text-[#CCFF00]",
  };

  return <div className={`${colors[team.color]}`}>{driver.toUpperCase()}</div>;
}
