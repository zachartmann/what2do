"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _httpStatusCodes = require("http-status-codes");

var _Comment = _interopRequireDefault(require("./Comment"));

var _Poll = _interopRequireDefault(require("./Poll"));

var _Suggestion = _interopRequireDefault(require("./Suggestion"));

var _Template = _interopRequireDefault(require("./Template"));

var _Idea = _interopRequireDefault(require("./Idea"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.use(_Comment.default);
router.use(_Poll.default);
router.use(_Suggestion.default);
router.use(_Template.default);
router.use(_Idea.default);
router.use(_User.default);
router.get("/hi", async (req, res) => {
  return res.status(_httpStatusCodes.StatusCodes.OK).json("Hello friend!");
});
router.get("/", async (req, res) => {
  return res.status(_httpStatusCodes.StatusCodes.OK).json("This is the home page lmao");
});
var _default = router;
exports.default = _default;