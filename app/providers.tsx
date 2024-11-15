import { NextUIProvider } from "@nextui-org/system";
import { ReactNode } from "react";
import SocketProvider from "./socketProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <NextUIProvider>
      <SocketProvider>{children}</SocketProvider>
    </NextUIProvider>
  );
}
