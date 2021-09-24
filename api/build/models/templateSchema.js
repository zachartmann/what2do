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
const Template = new _mongoose.default.Schema({
  title: String,
  category: String,
  theme: String,
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

const TemplateModel = _mongoose.default.model("Template", Template);

var _default = TemplateModel;
exports.default = _default;