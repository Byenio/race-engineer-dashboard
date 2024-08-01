export type TempColors = {
  [key: string]: string;
};

export const tempColors: TempColors = {
  critical: "red-500",
  overheat: "amber-500",
  optimal: "green-500",
  warm: "teal-500",
  cold: "sky-500",
};

export type CompoundColor = {
  [key: string]: string;
};

export const compoundColor: CompoundColor = {
  hard: "white",
  medium: "yellow-500",
  soft: "red-500",
  inter: "green-500",
  wet: "blue-500",
};

export type TyreTempValues = {
  [key: string]: { [key: string]: number };
};

// tyre state up to each temperature
export const tyreTempValues: TyreTempValues = {
  C0: {
    cold: 95,
    warm: 100,
    optimal: 115,
    overheat: 120,
  },
  C1: {
    cold: 95,
    warm: 100,
    optimal: 115,
    overheat: 120,
  },
  C2: {
    cold: 93,
    warm: 98,
    optimal: 113,
    overheat: 118,
  },
  C3: {
    cold: 90,
    warm: 95,
    optimal: 110,
    overheat: 115,
  },
  C4: {
    cold: 88,
    warm: 93,
    optimal: 108,
    overheat: 113,
  },
  C5: {
    cold: 85,
    warm: 90,
    optimal: 105,
    overheat: 110,
  },
  INT: {
    cold: 75,
    warm: 80,
    optimal: 93,
    overheat: 95,
  },
  WET: {
    cold: 60,
    warm: 70,
    optimal: 83,
    overheat: 85,
  },
};
