"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _httpStatusCodes = require("http-status-codes");

var _pollSchema = _interopRequireDefault(require("../models/pollSchema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
/**
 * GET
 */

router.get("/polls", async (req, res) => {
  const polls = await _pollSchema.default.find({});
  return res.status(_httpStatusCodes.StatusCodes.OK).json(polls);
});
router.get("/poll/:id", async (req, res) => {
  const pollId = Number(req.params.id);

  if (!pollId) {
    return res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json("Poll id is not a valid number");
  }

  const poll = await _pollSchema.default.findOne({
    pollId
  });

  if (poll) {
    return res.status(_httpStatusCodes.StatusCodes.OK).json(poll);
  }

  return res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json("Something bad happened");
});
/**
 * POST
 */

router.post("/poll", async (req, res) => {
  const {
    pollId,
    title,
    endDate,
    timeLimit,
    ideaIds
  } = req.query;
  let pollToCreate;

  if (req.query) {
    pollToCreate = new _pollSchema.default({
      pollId,
      title,
      endDate,
      timeLimit,
      ideaIds
    });
  } else {
    pollToCreate = new _pollSchema.default({
      pollId: 1,
      title: "Test",
      endDate: new Date(),
      timeLimit: 10,
      ideaIds: [1]
    });
  }

  pollToCreate.save(err => {
    if (err) {
      console.log("Something didn't work");
      return res.status(_httpStatusCodes.StatusCodes.OK).json(pollToCreate);
    } else {
      console.log("Something worked!");
    }
  });
  return res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json("Problem saving the record");
});
var _default = router;
exports.default = _default;