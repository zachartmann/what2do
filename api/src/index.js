import app from "./server";
import env from "./environment";
import connect from "./database";
import { Server } from "socket.io";
import { createServer } from "http";

// Start the server
const port = Number(env.port);

connect();

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log(`Connected with client: ${socket.id}`);

  socket.on("refresh", () => {
    io.emit("refresh");
  });
});

httpServer.listen(port, () => {
  console.info("Socket server started on port: " + port);
});

// app.listen(port, () => {
//   console.info("Express server started on port: " + port);
//   console.info(`Running on ${env.node_env} environment`);
// });
