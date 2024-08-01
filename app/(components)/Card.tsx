import { ReactNode } from "react";

// type Colors = "red" | "green" | "blue" | "white";

// const colors: { [key in Colors]: string } = {
//   red: "#ff000020",
//   green: "#00ff0020",
//   blue: "#0000ff20",
//   white: "#ffffff20",
// };

export default function Card({
  className,
  cardName,
  children,
}: {
  className?: string;
  cardName?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`${className} border-2 border-[#ffffff60] rounded-lg p-2 relative`}
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
