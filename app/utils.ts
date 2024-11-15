export function formatTime(time: number): string {
  const totalSeconds = Math.floor(time / 1000);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const milliseconds = time % 1000;

  const paddedMilliseconds = String(milliseconds).padStart(3, "0");

  if (minutes > 0) {
    const paddedSeconds = String(seconds).padStart(2, "0");
    return `${minutes}:${paddedSeconds}.${paddedMilliseconds}`;
  }

  return `${seconds}.${paddedMilliseconds}`;
}
