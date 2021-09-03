import express from "express";

import BaseRouter from "./routes/index";

// Init express
const app = express();

app.use("/", BaseRouter);

// Export express instance
export default app;
