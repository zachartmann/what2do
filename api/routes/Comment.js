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

export default router;
