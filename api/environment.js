import dotenv from "dotenv";
dotenv.config();

export default {
  dbUri: process.env.MONGODB_URI ?? "",
  port: process.env.PORT ?? "3000",
};
