import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import CommentModel from "../models/commentSchema";
import { isEmpty } from "lodash";

const router = Router();

/**
 * GET: /comments
 */

router.get("/comments", async (req, res) => {
  const comments = await CommentModel.find({}).exec();

  return res.status(StatusCodes.OK).json(comments);
});

router.get("/comments/:id", async (req, res) => {
  const _id = Number(req.params.id);

  if (!_id) {
    return res.sendStatus(StatusCodes.BAD_REQUEST);
  }

  try {
    const comments = await CommentModel.findById({ _id }).exec();

    return res.status(StatusCodes.OK).json(comments);
  } catch (err) {
    return res.sendStatus(StatusCodes.NOT_FOUND);
  }
});

/**
 * POST: /comments
 */

router.post("/comment", async (req, res) => {
  if (!isEmpty(req.body)) {
    const { commentId, comment, user } = req.body;

    const commentToCreate = new CommentModel({
      commentId,
      comment,
      user,
    });

    try {
      await commentToCreate.save();

      return res.status(StatusCodes.CREATED).json(commentToCreate);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  }
});

export default router;
