import { TyreCompound, TyreData, TyrePressures } from "./components/TyreData";

export default function LiveTyresData({
  tyreDamage,
  actualTyreCompound,
  visualTyreCompound,
  tyreAge,
  brakeTemps,
  tyreSurfaceTemps,
  tyreInnerTemps,
  tyrePressures,
}: {
  tyreDamage: number[];
  actualTyreCompound: number;
  visualTyreCompound: number;
  tyreAge: number;
  brakeTemps: number[];
  tyreSurfaceTemps: number[];
  tyreInnerTemps: number[];
  tyrePressures: number[];
}) {
  return (
    <>
      <TyreData
        actualTyreCompound={actualTyreCompound}
        tyreDamage={tyreDamage}
        tyreSurfaceTemps={tyreSurfaceTemps}
        tyreInnerTemps={tyreInnerTemps}
        brakeTemps={brakeTemps}
      />
      <TyreCompound
        actualTyreCompound={actualTyreCompound}
        visualTyreCompound={visualTyreCompound}
        tyreAge={tyreAge}
      />
      <TyrePressures tyrePressures={tyrePressures} />
    </>
  );
}
