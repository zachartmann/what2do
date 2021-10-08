import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import IdeaModel from "../models/ideaSchema";
import { isEmpty } from "lodash";
import mongoose from "mongoose";

const router = Router();

/**
 * GET: /ideas - retrieve idea(s)
 */

router.get("/ideas", async (req, res) => {
  let ideas;

  // /ideas?ids=id1,id2,id3 allows for a single query for multiple IDs
  if (!isEmpty(req.query) && !isEmpty(req.query.ids)) {
    const _ids = req.query.ids.split(",");
    const ids = _ids.map((id) => mongoose.Types.ObjectId(id));

    ideas = await IdeaModel.find({
      _id: {
        $in: ids,
      },
    }).exec();
  } else {
    ideas = await IdeaModel.find({}).exec();
  }

  return res.status(StatusCodes.OK).json(ideas);
});

/**
 * POST: /idea - create or update an idea
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
      commentIds,
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
        commentIds,
        lastModified: new Date(),
      };

      try {
        await IdeaModel.findOneAndUpdate({ _id }, updatedModel).exec();

        return res.sendStatus(StatusCodes.OK);
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
      commentIds,
      createdAt: new Date(),
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
 * DELETE: /idea/:id - delete an idea
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
