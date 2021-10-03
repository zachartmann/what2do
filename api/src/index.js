import app from "./server";
import env from "./environment";
import connect from "./database";

// Start the server
const port = Number(env.port);

connect();

app.listen(port, () => {
  console.info("Express server started on port: " + port);
  console.info(`Running on ${env.node_env} environment`);
});
