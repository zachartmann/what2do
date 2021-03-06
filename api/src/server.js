import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import helmet from "helmet";
import express from "express";
import env from "./environment";
import BaseRouter from "./routes/index";
import { StatusCodes } from "http-status-codes";

// Init express
const app = express();

/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Development only settings
if (env.node_env === "development") {
  app.use(morgan("dev"));
  // Print API errors
  app.use((err, req, res, next) => {
    console.log(err.message, err);
    return res.status(BAD_REQUEST).json({
      error: err.message,
    });
  });
}

// Production only settings
if (env.node_env === "production") {
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          ...helmet.contentSecurityPolicy.getDefaultDirectives(),
          "script-src": ["'self'", "'unsafe-inline'"],
        },
      },
    })
  ); // Security
}

// Add APIs
app.use("/api", BaseRouter);

/************************************************************************************
 *                              Serve front-end content
 ***********************************************************************************/

const staticDir = path.join(__dirname, "../dist/");
app.use(express.static(staticDir));
app.get("*", (req, res) => {
  if (req.url.startsWith("/api")) {
    res.status(StatusCodes.NOT_FOUND).end();
  } else {
    res.sendFile("index.html", { root: staticDir });
  }
});

app.set("port", Number(env.port));

// Export express instance
export default app;
