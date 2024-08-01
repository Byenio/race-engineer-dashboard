export const teams: Teams = {
  0: { name: "Mercedes", image: "mercedes.png", color: "mercedes" },
  1: { name: "Ferari", image: "ferrari.png", color: "ferrari" },
  2: { name: "Red Bull Racing", image: "redbullracing.png", color: "redbull" },
  3: { name: "Williams", image: "williams.png", color: "williams" },
  4: { name: "Aston Martin", image: "astonmartin.png", color: "astonmartin" },
  5: { name: "Alpine", image: "alpine.png", color: "alipne" },
  6: { name: "Alpha Tauri", image: "alphatauri.png", color: "alphatauri" },
  7: { name: "Haas", image: "haas.png", color: "haas" },
  8: { name: "McLaren", image: "mclaren.png", color: "mclaren" },
  9: { name: "Alfa Romeo", image: "alfaromeo.png", color: "ferrari" },
  104: { name: "PRGRS Racing", image: "prgrs.png", color: "prgrs" },
  255: { name: "PRGRS Racing", image: "prgrs.png", color: "prgrs" },
};

type Teams = {
  [key: number]: {
    name: string;
    image: string;
    color: string;
  };
};
