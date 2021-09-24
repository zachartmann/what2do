"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _httpStatusCodes = require("http-status-codes");

var _commentSchema = _interopRequireDefault(require("../models/commentSchema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
/**
 * GET: /comments
 */

router.get("/comments", async (req, res) => {
  const comments = await _commentSchema.default.find({});
  return res.status(StatusCodes.OK).json(comments);
});
router.get("/comments/:id", async (req, res) => {
  const commentId = Number(req.params.id);

  if (!commentId) {
    return res.status(StatusCodes.BAD_REQUEST).json("Comment id is a valid number reference");
  }

  const comments = await _commentSchema.default.findOne({
    commentId
  });

  if (comments) {
    return res.status(StatusCodes.OK).json(comments);
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("There is an internal issue with the code");
});
/**
 * POST: /comments
 */

router.post("/comment", async (req, res) => {
  const {
    commentId,
    comment,
    user
  } = req.query;
  let commentToCreate;

  if (req.query) {
    commentToCreate = new _commentSchema.default({
      commentId,
      comment,
      user
    });
  } else {
    commentToCreate = new _commentSchema.default({
      commentId: 1,
      comment: "Testing this as a comment this as a comment",
      user: "Testuser"
    });
  }

  commentToCreate.save(err => {
    if (err) {
      console.log("issue with the comment endpoint");
      return res.status(_httpStatusCodes.StausCodes.OK).json(commentToCreate);
    } else {
      console.log("This comment endpoint worked");
    }
  });
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Unable to save comment record");
});
var _default = router;
exports.default = _default;