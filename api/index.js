import app from "./server";
import env from "./environment";
import connect from "./database";

// Start the server
const port = Number(env.port);

connect();

app.listen(port, () => {
  console.info("Express server started on port: " + port);
});
