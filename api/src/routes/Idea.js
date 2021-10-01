import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import IdeaModel from "../models/ideaSchema";
import { isEmpty } from "lodash";

const router = Router();

/**
 * GET: /idea
 */

router.get("/ideas", async (req, res) => {
  const ideas = await IdeaModel.find({}).exec();

  return res.status(StatusCodes.OK).json(ideas);
});

/**
 * POST: /idea
 */

router.post("/idea", async (req, res) => {
  if (!isEmpty(req.body)) {
    const {
      _id,
      content,
      upVotes,
      downVotes,
      upVoters,
      downVoters,
      pinned,
      user,
    } = req.body;

    if (_id) {
      // Edit idea if record exists instead
      const updatedModel = {
        _id,
        content,
        upVotes,
        downVotes,
        upVoters,
        downVoters,
        pinned,
        user,
      };

      try {
        await IdeaModel.findOneAndUpdate({ _id }, updatedModel).exec();

        return res.status(StatusCodes.OK);
      } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
      }
    }

    const ideaToCreate = new IdeaModel({
      content,
      upVotes,
      downVotes,
      upVoters,
      downVoters,
      pinned,
      user,
    });

    try {
      await ideaToCreate.save();

      return res.status(StatusCodes.CREATED).json(ideaToCreate);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  } else {
    return res.sendStatus(StatusCodes.BAD_REQUEST);
  }
});

/**
 * DELETE: /idea/:id
 */

router.delete("/idea/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    await IdeaModel.deleteOne({ _id }).exec();

    return res.sendStatus(StatusCodes.OK);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});

export default router;
