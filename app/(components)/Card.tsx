import { ReactNode } from "react";

export default function Card({
  className = "",
  cardName = "",
  noBorder = false,
  accentColor = "rgb(255, 255, 255)",
  children,
}: {
  className?: string;
  cardName?: string;
  noBorder?: boolean;
  accentColor?: string;
  children: ReactNode;
}) {
  const borderClass = noBorder ? "border-0 p-0" : "border-2 p-2";

  return (
    <div
      className={`${borderClass} border-[${accentColor}] rounded-lg relative ${className}`}
    >
      <CardName cardName={cardName} />
      {children}
    </div>
  );
}

function CardName({ cardName }: { cardName: string | undefined }) {
  if (!cardName) return null;

  return (
    <span className="absolute top-[-13px] left-2 w-auto text-center bg-black px-2 text-amber-400">
      {cardName.toUpperCase()}
    </span>
  );
}
