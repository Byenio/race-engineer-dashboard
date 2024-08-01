import { TyreCompound, TyreData, TyrePressures } from "./components/TyreData";

const defaultTyresData = {
  tyreDamage: [0, 0, 0, 0],
  actualTyreCompound: 0,
  visualTyreCompound: 0,
  tyreAge: 0,
  brakeTemps: [0, 0, 0, 0],
  tyreSurfaceTemps: [0, 0, 0, 0],
  tyreInnerTemps: [0, 0, 0, 0],
  tyrePressures: [0, 0, 0, 0],
};

export default function DefaultTyresData() {
  return (
    <div className="text-center">
      <TyreData
        actualTyreCompound={defaultTyresData.actualTyreCompound}
        tyreDamage={defaultTyresData.tyreDamage}
        tyreSurfaceTemps={defaultTyresData.tyreSurfaceTemps}
        tyreInnerTemps={defaultTyresData.tyreInnerTemps}
        brakeTemps={defaultTyresData.brakeTemps}
      />
      <TyreCompound
        actualTyreCompound={defaultTyresData.actualTyreCompound}
        visualTyreCompound={defaultTyresData.visualTyreCompound}
        tyreAge={defaultTyresData.tyreAge}
      />
      <TyrePressures tyrePressures={defaultTyresData.tyrePressures} />
    </div>
  );
}
