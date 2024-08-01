export const actualTyres: ActualTyres = {
  0: "-",
  16: "C5",
  17: "C4",
  18: "C3",
  19: "C2",
  20: "C1",
  21: "C0",
  7: "Inter",
  8: "Wet",
};

type ActualTyres = {
  [key: number]: string;
};

export const visualTyres: VisualTyres = {
  0: { label: "-", abbrv: "-", color: "gray" },
  16: { label: "soft", abbrv: "S", color: "red" },
  17: { label: "medium", abbrv: "M", color: "yellow" },
  18: { label: "hard", abbrv: "H", color: "white" },
  7: { label: "inter", abbrv: "I", color: "green" },
  8: { label: "wet", abbrv: "W", color: "blue" },
};

type VisualTyres = {
  [key: number]: {
    label: string;
    abbrv: string;
    color: string;
  };
};
