import { Router } from "express";
import { StausCodes } from "http-status-codes";
import CommentModel from "../models/commentSchema";

const router = Router();

/**
 * GET: /comments
 */

router.get("/comments", async (req, res) => {
  const comments = await CommentModel.find({});

  return res.status(StatusCodes.OK).json(comments);
});

router.get("/comments/:id", async (req, res) => {
  const commentId = Number(req.params.id);
  if (!commentId) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json("Comment id is a valid number reference");
  }

  const comments = await CommentModel.findOne({ commentId });

  if (comments) {
    return res.status(StatusCodes.OK).json(comments);
  }

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json("There is an internal issue with the code");
});

/**
 * POST: /comments
 */

router.post("/comment", async (req, res) => {
  const { commentId, comment, user } = req.query;
  let commentToCreate;

  if (req.query) {
    commentToCreate = new CommentModel({
      commentId,
      comment,
      user,
    });
  } else {
    commentToCreate = new CommentModel({
      commentId: 1,
      comment: "Testing this as a comment this as a comment",
      user: "Testuser",
    });
  }

  commentToCreate.save((err) => {
    if (err) {
      console.log("issue with the comment endpoint");
      return res.status(StausCodes.OK).json(commentToCreate);
    } else {
      console.log("This comment endpoint worked");
    }
  });

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json("Unable to save comment record");
});

export default router;
