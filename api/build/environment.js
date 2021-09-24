"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var _default = {
  dbUri: process.env.MONGODB_URI ?? "",
  port: process.env.PORT ?? "3000",
  node_env: process.env.NODE_ENV ?? "development"
};
exports.default = _default;