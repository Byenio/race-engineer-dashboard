export const teams: Teams = {
  0: { name: "Mercedes", image: "mercedes.png" },
  1: { name: "Ferari", image: "ferrari.png" },
  2: { name: "Red Bull Racing", image: "redbullracing.png" },
  3: { name: "Williams", image: "williams.png" },
  4: { name: "Aston Martin", image: "astonmartin.png" },
  5: { name: "Alpine", image: "alpine.png" },
  6: { name: "Alpha Tauri", image: "alphatauri.png" },
  7: { name: "Haas", image: "haas.png" },
  8: { name: "McLaren", image: "mclaren.png" },
  9: { name: "Alfa Romeo", image: "alfaromeo.png" },
  255: { name: "PRGRS Racing", image: "prgrs.png" },
};

type Teams = {
  [key: number]: {
    name: string;
    image: string;
  };
};
