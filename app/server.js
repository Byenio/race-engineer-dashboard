import { F123UDP } from "f1-23-udp";
import next from "next";
import { createServer } from "node:http";
import { Server } from "socket.io";

/** server setup */
const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();
/** */

/** f1 telemetry setup */
const options = {
  port: 20780,
  address: "192.168.67.60",
  // address: "172.25.62.89",
};

const f123 = new F123UDP(options);
f123.start();
/** */

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log("> Successfully connected to server");

    f123.on("motion", (data) => {
      data.m_header.session_uid = data.m_header.session_uid.toString();
      io.emit("motion", data);
    });

    f123.on("session", (data) => {
      data.m_header.session_uid = data.m_header.session_uid.toString();
      io.emit("session", data);
    });

    f123.on("lapData", (data) => {
      data.m_header.session_uid = data.m_header.session_uid.toString();
      io.emit("lapData", data);
    });

    f123.on("event", (data) => {
      data.m_header.session_uid = data.m_header.session_uid.toString();
      io.emit("event", data);
    });

    f123.on("participants", (data) => {
      data.m_header.session_uid = data.m_header.session_uid.toString();
      io.emit("participants", data);
    });

    f123.on("carSetups", (data) => {
      data.m_header.session_uid = data.m_header.session_uid.toString();
      io.emit("carSetups", data);
    });

    f123.on("carTelemetry", (data) => {
      data.m_header.session_uid = data.m_header.session_uid.toString();
      io.emit("carTelemetry", data);
    });

    f123.on("carStatus", (data) => {
      data.m_header.session_uid = data.m_header.session_uid.toString();
      io.emit("carStatus", data);
    });

    f123.on("finalClassification", (data) => {
      data.m_header.session_uid = data.m_header.session_uid.toString();
      io.emit("finalClassification", data);
    });

    f123.on("lobbyInfo", (data) => {
      data.m_header.session_uid = data.m_header.session_uid.toString();
      io.emit("lobbyInfo", data);
    });

    f123.on("carDamage", (data) => {
      data.m_header.session_uid = data.m_header.session_uid.toString();
      io.emit("carDamage", data);
    });

    f123.on("sessionHistory", (data) => {
      data.m_header.session_uid = data.m_header.session_uid.toString();
      io.emit("sessionHistory", data);
    });

    f123.on("tyreSets", (data) => {
      data.m_header.session_uid = data.m_header.session_uid.toString();
      io.emit("tyreSets", data);
    });

    f123.on("motionEx", (data) => {
      data.m_header.session_uid = data.m_header.session_uid.toString();
      io.emit("motionEx", data);
    });
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
