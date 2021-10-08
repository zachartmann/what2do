import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import CommentModel from "../models/commentSchema";
import { isEmpty } from "lodash";

const router = Router();

/**
 * This is the Comment Route Code and loads in the CommentModel which has been defined in the commentSchema
 * GET: /comments - retrieve comments
 */

router.get("/comments", async (req, res) => {
  const comments = await CommentModel.find({}).exec();

  return res.status(StatusCodes.OK).json(comments);
});

/**
 * GET: /comment - retrieve comment
 */

router.get("/comment/:id", async (req, res) => {
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
 * POST: /comments - create a comment
 */

router.post("/comment", async (req, res) => {
  if (!isEmpty(req.body)) {
    const { comment, user } = req.body;

    const commentToCreate = new CommentModel({
      comment,
      user,
    });

    try {
      await commentToCreate.save();

      return res.status(StatusCodes.CREATED).json(commentToCreate);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  } else {
    return res.sendStatus(StatusCodes.BAD_REQUEST);
  }
});

/**
 * DELETE: /comment/:id - delete a comment
 */

router.delete("/comment/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    await CommentModel.deleteOne({ _id }).exec();

    return res.sendStatus(StatusCodes.OK);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});

export default router;
