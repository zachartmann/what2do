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
const Poll = new _mongoose.default.Schema({
  pollId: Number,
  title: String,
  endDate: Date,
  timeLimit: Number,
  ideaIds: [Number]
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

const PollModel = _mongoose.default.model("Poll", Poll);

var _default = PollModel;
exports.default = _default;