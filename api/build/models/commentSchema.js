"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Schema definition
 */
const Comment = new _mongoose.default.Schema({
  commentId: Number,
  comment: String,
  user: String
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

const CommentModel = _mongoose.default.model("Comment", Comment);

var _default = CommentModel;
exports.default = _default;