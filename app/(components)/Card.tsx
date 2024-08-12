import { ReactNode } from "react";

type Colors = "red" | "green" | "blue" | "white";

type PresetColors = {
  [key in Colors]: string;
};

export default function Card({
  className,
  cardName,
  noBorder,
  accentColor = "white",
  children,
}: {
  className?: string;
  cardName?: string;
  noBorder?: boolean;
  accentColor?: Colors;
  children: ReactNode;
}) {
  const border = noBorder ? "border-0 p-0" : "border-2 p-2";

  const presetColors: PresetColors = {
    red: "border-[#ff000060]",
    green: "border-[#00ff0060]",
    blue: "border-[#0000ff60]",
    white: "border-[#ffffff60]",
  };

  return (
    <div
      className={`${border} ${presetColors[accentColor]} rounded-lg relative ${className}`}
    >
      <CardName cardName={cardName} />
      {children}
    </div>
  );
}

function CardName({ cardName }: { cardName: string | undefined }) {
  if (cardName)
    return (
      <span className="absolute top-[-13px] left-2 w-auto text-center bg-black px-2 text-amber-400">
        {cardName.toUpperCase()}
      </span>
    );
  return;
}
