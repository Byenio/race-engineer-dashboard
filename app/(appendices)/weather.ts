export const weather: Weather = {
  0: "clear",
  1: "light cloud",
  2: "overcast",
  3: "light rain",
  4: "heavy rain",
  5: "storm",
};

type Weather = {
  [key: number]: string;
};
