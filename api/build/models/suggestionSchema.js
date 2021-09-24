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
const Suggestion = new _mongoose.default.Schema();
Suggestion.add({
  _id: Number,
  Suggestion: String,
  Category: String
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

const SuggestionModel = _mongoose.default.model("Suggestion", Suggestion);

var _default = SuggestionModel;
exports.default = _default;