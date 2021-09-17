import { Router } from "express";
import { OK } from "http-status-codes";
import CommentModel from "../models/commentSchema";

const router = Router();

/**
 * GET: /items
 */

router.post("/comment", async (req, res) => {
  const commentToCreate = new CommentModel({
    commentId: 123,
    comment: Testing,
    user: Test,
  });
  commentToCreate.save((err) => {
    if (err) {
      console.log("issue with the comment endpoint");
    } else {
      console.log("This comment endpoint worked");
    }
  });
  return res.status(StatusCodes.OK).json("The comment posted succesfully");
});

/**
 * POST: /item (DEVELOPMENT BUILD ONLY)
 */
router.post("/..", async (req, res) => {});

export default router;
