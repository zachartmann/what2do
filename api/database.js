import mongoose from "mongoose";
import env from "./environment";

export default function () {
  const url = env.MONGODB_URI;
  mongoose.connect(url).then(
    () => {
      console.log("Connection successful");
    },
    (err) => {
      console.log(`Connection error ${err}`);
    }
  ); // may need to use createConnection
}
