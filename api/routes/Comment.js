import { Router } from "express";
import { OK } from "http-status-codes";
import CommentModel from "../models/commentSchema";

const router = Router();

/**
 * GET: /comments
 */

router.get("/comments", async (req, res) => {
  const comments = await CommentModel.find({});

  return res.status(StatusCodes.OK).json(comments);
});

/**
 * POST: /comments
 */

router.post("/comments", async (req, res) => {
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
