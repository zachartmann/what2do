"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.User = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Schema definition
 */
const User = new _mongoose.default.Schema({
  name: String,
  password: String
});
/**
 * Accessing a specific schema type by key
 */

/**
 * Methods
 */

/**
 * Define model.
 */

exports.User = User;

const UserModel = _mongoose.default.model("User", User);

var _default = UserModel;
exports.default = _default;