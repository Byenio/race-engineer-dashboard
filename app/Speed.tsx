"use client";

type Speed = number | undefined;
const defaultSpeed = 0;

export default function Speed({ speed = defaultSpeed }: { speed: Speed }) {
  return <div>{speed}</div>;
}
