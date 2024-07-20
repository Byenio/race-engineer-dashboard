"use client";

import { Chip } from "@nextui-org/chip";

type TyreTemps = number[] | undefined;
const defaultTyreTemps = [0, 0, 0, 0];

type TyreWear = number[] | undefined;
const defaultTyreWear = [0, 0, 0, 0];

/*
0 - rear left
1 - rear right
2 - front left
3 - front right
*/

export default function Tyres({
  tyreTemps = defaultTyreTemps,
  tyreWear = defaultTyreWear,
}: {
  tyreTemps: TyreTemps;
  tyreWear: TyreWear;
}) {
  return (
    <>
      <div>
        <Chip
          size="lg"
          radius="sm"
          className="m-1"
          classNames={{ base: "min-w-[120px] min-h-[140px] text-center" }}
          variant="bordered"
        >
          <Chip
            radius="sm"
            className="m-1"
            classNames={{ base: "min-w-[70px]" }}
            color={setTempColor(tyreTemps[2])}
            variant="dot"
          >
            {tyreTemps[2]}°
          </Chip>
          <br />
          <Chip
            radius="sm"
            className="m-1"
            classNames={{ base: "min-w-[70px]" }}
            color={setWearColor(tyreWear[2])}
            variant="bordered"
          >
            {tyreWear[2]}%
          </Chip>
        </Chip>
        <Chip
          size="lg"
          radius="sm"
          className="m-1"
          classNames={{ base: "min-w-[120px] min-h-[140px] text-center" }}
          variant="bordered"
        >
          <Chip
            radius="sm"
            className="m-1"
            classNames={{ base: "min-w-[70px]" }}
            color={setTempColor(tyreTemps[3])}
            variant="dot"
          >
            {tyreTemps[3]}°
          </Chip>
          <br />
          <Chip
            radius="sm"
            className="m-1"
            classNames={{ base: "min-w-[70px]" }}
            color={setWearColor(tyreWear[3])}
            variant="bordered"
          >
            {tyreWear[3]}%
          </Chip>
        </Chip>
      </div>
      <div>
        <Chip
          size="lg"
          radius="sm"
          className="m-1"
          classNames={{ base: "min-w-[120px] min-h-[140px] text-center" }}
          variant="bordered"
        >
          <Chip
            radius="sm"
            className="m-1"
            classNames={{ base: "min-w-[70px]" }}
            color={setTempColor(tyreTemps[0])}
            variant="dot"
          >
            {tyreTemps[0]}°
          </Chip>
          <br />
          <Chip
            radius="sm"
            className="m-1"
            classNames={{ base: "min-w-[70px]" }}
            color={setWearColor(tyreWear[0])}
            variant="bordered"
          >
            {tyreWear[0]}%
          </Chip>
        </Chip>
        <Chip
          size="lg"
          radius="sm"
          className="m-1"
          classNames={{ base: "min-w-[120px] min-h-[140px] text-center" }}
          variant="bordered"
        >
          <Chip
            radius="sm"
            className="m-1"
            classNames={{ base: "min-w-[70px]" }}
            color={setTempColor(tyreTemps[1])}
            variant="dot"
          >
            {tyreTemps[1]}°
          </Chip>
          <br />
          <Chip
            radius="sm"
            className="m-1"
            classNames={{ base: "min-w-[70px]" }}
            color={setWearColor(tyreWear[1])}
            variant="bordered"
          >
            {tyreWear[1]}%
          </Chip>
        </Chip>
      </div>
    </>
  );
}

function setTempColor(value: number) {
  if (value > 110) return "danger";
  if (value > 105) return "warning";
  if (value < 90) return "primary";
  return "success";
}

function setWearColor(value: number) {
  if (value >= 60) return "danger";
  if (value >= 40) return "warning";
  if (value >= 25) return "success";
  return "primary";
}
