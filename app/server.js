import { F123UDP } from "f1-23-udp";
import next from "next";
import { createServer } from "node:http";
import { Server } from "socket.io";
import config from "./server.conf.js";
import { eventNames } from "./server.constants.js";

const { dev, hostname, port, f123options } = config;

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

const options = {
  port: f123options.port,
  address: f123options.address,
};

const f123 = new F123UDP(options);
f123.start();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer, {
    cors: {
      origin: ["http://localhost:3000", "http://your-frontend-domain.com"],
      methods: ["GET", "POST"],
    },
  });

  const processAndEmit = (eventName, data) => {
    data.m_header.session_uid = data.m_header.session_uid.toString();
    io.emit(eventName, data);
  };

  io.on("connection", (socket) => {
    socket.compress(true);
    console.log("> Successfully connected to server");

    for (const eventName of eventNames) {
      f123.on(eventName, (data) => processAndEmit(eventName, data));
    }
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
