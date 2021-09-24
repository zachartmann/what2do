"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _environment = _interopRequireDefault(require("./environment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function _default() {
  const url = _environment.default.dbUri;

  try {
    await _mongoose.default.connect(url);
    console.log("Connection successful");
  } catch (err) {
    console.log(`Connection error ${err}`);
  }
}