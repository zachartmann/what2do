"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _userSchema = require("./userSchema");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Schema definition
 */
const Idea = new _mongoose.default.Schema({
  content: String,
  upVotes: Number,
  downVotes: Number,
  upVoters: [_userSchema.User],
  downVoters: [_userSchema.User],
  pinned: Boolean,
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

const IdeaModel = _mongoose.default.model("Idea", Idea);

var _default = IdeaModel;
exports.default = _default;