import app from "./server";
import env from "./environment";
import db from "./database";

// Start the server
const port = Number(env.port);

// async function dbconnect() {
//   try {
//     await db.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// }

// dbconnect();

app.listen(port, () => {
  console.info("Express server started on port: " + port);
});
