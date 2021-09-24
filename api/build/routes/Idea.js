"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _httpStatusCodes = require("http-status-codes");

var _ideaSchema = _interopRequireDefault(require("../models/ideaSchema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
/**
 * GET: /items
 */

router.post("/idea", async (req, res) => {
  const ideaToCreate = new _ideaSchema.default({
    content: "IdeaContent",
    upVotes: 9,
    downVotes: 3,
    pinned: false
  });
  ideaToCreate.save(err => {
    if (err) {
      console.log("issue with the idea endpoint");
    } else {
      console.log("This idea endpoint worked");
    }
  });
  return res.status(StatusCodes.OK).json("IT WORKED");
});
/**
 * POST: /item (DEVELOPMENT BUILD ONLY)
 */

router.post("/..", async (req, res) => {});
var _default = router;
exports.default = _default;