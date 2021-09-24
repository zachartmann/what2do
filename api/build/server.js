"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

var _helmet = _interopRequireDefault(require("helmet"));

var _express = _interopRequireDefault(require("express"));

var _environment = _interopRequireDefault(require("./environment"));

var _index = _interopRequireDefault(require("./routes/index"));

var _url = require("url");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Init express
const app = (0, _express.default)();
/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use("/uploads", _express.default.static("uploads"));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use((0, _cookieParser.default)()); // Development only settings

if (_environment.default.node_env === "development") {
  app.use((0, _morgan.default)("dev")); // Print API errors

  app.use((err, req, res, next) => {
    console.log(err.message, err);
    return res.status(BAD_REQUEST).json({
      error: err.message
    });
  });
} // Production only settings


if (_environment.default.node_env === "production") {
  app.use((0, _helmet.default)()); // Security
} // Add APIs


app.use("/api", _index.default);
/************************************************************************************
 *                              Serve front-end content
 ***********************************************************************************/

const staticDir = _path.default.join(__dirname, "../../build/");

app.use(_express.default.static(staticDir));
app.get("*", (req, res) => {
  if (req.url.startsWith("/api")) {
    res.status(NOT_FOUND).end();
  } else {
    res.sendFile("index.html", {
      root: staticDir
    });
  }
}); // Export express instance

var _default = app;
exports.default = _default;