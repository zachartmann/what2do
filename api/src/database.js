import mongoose from "mongoose";
import env from "./environment";

export default async function () {
  const url = env.dbUri;
  try {
    await mongoose.connect(url);
    console.log("Connection successful");
  } catch (err) {
    console.log(`Connection error ${err}`);
  }
}
