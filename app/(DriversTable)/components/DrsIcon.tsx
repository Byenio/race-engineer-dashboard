type Colors = {
  [key: number]: string;
};

export function DrsIcon({ drsAllowed }: { drsAllowed: number }) {
  const colors: Colors = {
    0: "text-gray-500",
    1: "text-green-500",
  };

  return <div className={`${colors[drsAllowed]}`}>DRS</div>;
}
