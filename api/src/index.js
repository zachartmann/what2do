import app from "./server";
import connect from "./database";
import { Server } from "socket.io";
import { createServer } from "http";

// Start the server
connect();

const httpServer = createServer(app);
const io = new Server(httpServer, { path: "/api/socket.io" });

io.on("connection", (socket) => {
  console.log(`Connected with client: ${socket.id}`);

  socket.on("refresh", () => {
    console.log(`Client ${socket.id} sent refresh event`);
    io.emit("refresh");
  });
});

httpServer.listen(app.get("port"), () => {
  console.info("Socket server started on port: " + app.get("port"));
});

// app.listen(port, () => {
//   console.info("Express server started on port: " + port);
//   console.info(`Running on ${env.node_env} environment`);
// });
