import { visualTyres } from "./tyres";

type Colors = {
  [key: string]: string;
};

export function TyreIcon({ tyre }: { tyre: number }) {
  const actualTyre = visualTyres[tyre];

  const colors: Colors = {
    red: "text-red-500",
    yellow: "text-yellow-500",
    white: "text-white",
    green: "text-green-500",
    blue: "text-blue-500",
  };

  return (
    <div className={`${colors[actualTyre.color]}`}>{actualTyre.abbrv}</div>
  );
}
