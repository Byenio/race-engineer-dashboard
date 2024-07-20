import { Chip } from "@nextui-org/chip";
import { Tooltip } from "@nextui-org/tooltip";

export default function StatusChip({ isConnected }: { isConnected: boolean }) {
  const color = isConnected ? "success" : "danger";
  const text = isConnected ? "Connected" : "Disconnected";

  return (
    <Tooltip content={"Refresh page to retry connection"}>
      <Chip color={color} variant="dot">
        {text}
      </Chip>
    </Tooltip>
  );
}
