import { actualTyres, visualTyres } from "@/app/(appendices)/tyres";
import { tyreTempValues } from "./temperatures";

export function TyreData({
  actualTyreCompound,
  tyreDamage,
  tyreSurfaceTemps,
  tyreInnerTemps,
  brakeTemps,
}: {
  actualTyreCompound: number;
  tyreDamage: number[];
  tyreSurfaceTemps: number[];
  tyreInnerTemps: number[];
  brakeTemps: number[];
}) {
  return (
    <div className="flex basis-full">
      <div className="grid grid-cols-4 items-center justify-center">
        {/* front left - 2 */}
        <TyreTemperatures
          actualTyreCompound={actualTyreCompound}
          tyreSurfaceTemp={tyreSurfaceTemps[2]}
          tyreInnerTemp={tyreInnerTemps[2]}
          brakeTemp={brakeTemps[2]}
        />
        <TyreDamage tyreDamage={tyreDamage[2]} />

        {/* front right - 3 */}
        <TyreDamage tyreDamage={tyreDamage[3]} />
        <TyreTemperatures
          actualTyreCompound={actualTyreCompound}
          tyreSurfaceTemp={tyreSurfaceTemps[3]}
          tyreInnerTemp={tyreInnerTemps[3]}
          brakeTemp={brakeTemps[3]}
        />

        {/* rear left - 0 */}
        <TyreTemperatures
          actualTyreCompound={actualTyreCompound}
          tyreSurfaceTemp={tyreSurfaceTemps[0]}
          tyreInnerTemp={tyreInnerTemps[0]}
          brakeTemp={brakeTemps[0]}
        />
        <TyreDamage tyreDamage={tyreDamage[0]} />

        {/* rear right - 1 */}
        <TyreDamage tyreDamage={tyreDamage[0]} />
        <TyreTemperatures
          actualTyreCompound={actualTyreCompound}
          tyreSurfaceTemp={tyreSurfaceTemps[1]}
          tyreInnerTemp={tyreInnerTemps[1]}
          brakeTemp={brakeTemps[1]}
        />
      </div>
    </div>
  );
}

export type TyreColors = {
  [key: string]: string;
};

export function TyreCompound({
  actualTyreCompound,
  visualTyreCompound,
  tyreAge,
}: {
  actualTyreCompound: number;
  visualTyreCompound: number;
  tyreAge: number;
}) {
  const visualTyre = visualTyres[visualTyreCompound];

  const tyreColors: TyreColors = {
    "-": "text-white",
    S: "text-red-500",
    M: "text-yellow-500",
    H: "text-white-500",
    I: "text-green-500",
    W: "text-blue-500",
  };

  return (
    <div>
      <span>({actualTyres[actualTyreCompound]}) </span>
      <span className={`${tyreColors[visualTyre.abbrv]}`}>
        {visualTyres[visualTyreCompound].abbrv}
      </span>
      <span> - {tyreAge} laps</span>
    </div>
  );
}

export function TyrePressures({ tyrePressures }: { tyrePressures: number[] }) {
  return (
    <>
      <div>(F) {tyrePressures[2].toFixed(2)} PSI</div>
      <div>(R) {tyrePressures[0].toFixed(2)} PSI</div>
    </>
  );
}

export type TempColors = {
  [key: string]: string;
};

function TyreTemperatures({
  actualTyreCompound,
  tyreSurfaceTemp,
  tyreInnerTemp,
  brakeTemp,
}: {
  actualTyreCompound: number;
  tyreSurfaceTemp: number;
  tyreInnerTemp: number;
  brakeTemp: number;
}) {
  const tyre = actualTyres[actualTyreCompound];
  const surfaceState = setTempState({
    compound: tyre,
    temperature: tyreSurfaceTemp,
  });
  const innerState = setTempState({
    compound: tyre,
    temperature: tyreInnerTemp,
  });

  const tempColors: TempColors = {
    critical: "text-red-500",
    overheat: "text-amber-500",
    optimal: "text-green-500",
    warm: "text-teal-500",
    cold: "text-sky-500",
    default: "text-white",
  };

  return (
    <div className="text-center">
      <div className={`${tempColors[surfaceState]}`}>{tyreSurfaceTemp}°</div>
      <div className={`${tempColors[innerState]}`}>{tyreInnerTemp}°</div>
      <div>{brakeTemp}°</div>
    </div>
  );
}

export type DamageColors = {
  [key: string]: string;
};

function TyreDamage({ tyreDamage }: { tyreDamage: number }) {
  const damageState = setDamageState({
    damage: tyreDamage,
  });

  const damageColors: DamageColors = {
    low: "border-teal-500 bg-teal-500/20",
    minor: "border-green-500 bg-green-500/20",
    moderate: "border-lime-500 bg-lime-500/20",
    significant: "border-yellow-500 bg-yellow-500/20",
    high: "border-amber-500 bg-amber-500/20",
    major: "border-orange-500 bg-orange-500/20",
    critical: "border-red-500 bg-red-500/20",
    default: "border-white bg-white/20",
  };

  return (
    <div
      className={`w-16 h-20 mx-2 my-4 flex items-center justify-center border rounded-lg ${damageColors[damageState]}`}
    >
      {tyreDamage}%
    </div>
  );
}

export function setTempState({
  compound,
  temperature,
}: {
  compound: string;
  temperature: number;
}): string {
  const tempValues = tyreTempValues[compound];

  if (!tempValues) return "default";
  if (temperature >= tempValues.overheat) return "critical";
  if (temperature >= tempValues.optimal) return "overheat";
  if (temperature >= tempValues.warm) return "optimal";
  if (temperature >= tempValues.cold) return "warm";
  return "cold";
}

export function setDamageState({ damage }: { damage: number }): string {
  if (!damage) return "default";
  if (damage <= 15) return "low";
  if (damage <= 25) return "minor";
  if (damage <= 35) return "moderate";
  if (damage <= 50) return "significant";
  if (damage <= 62) return "high";
  if (damage <= 75) return "major";
  return "critical";
}
