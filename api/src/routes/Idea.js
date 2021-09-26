import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import IdeaModel from "../models/ideaSchema";

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
  if (req.body) {
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

        console.log("Something worked!");
        return res.status(StatusCodes.OK);
      } catch (err) {
        console.log("Something didn't work");
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
      ideaToCreate.save();

      console.log("Something worked!");
      return res.status(StatusCodes.CREATED).json(ideaToCreate);
    } catch (err) {
      console.log("Something didn't work");
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  } else {
    return res.status(StatusCodes.BAD_REQUEST);
  }
});

/**
 * DELETE: /idea
 */

router.delete("/idea/:id", async (req, res) => {
  const _id = req.params.id;
  if (_id) {
    try {
      await IdeaModel.deleteOne({ _id }).exec();

      console.log("Something worked!");
      return res.status(StatusCodes.OK);
    } catch (err) {
      console.log("Something didn't work");
      return res.status(StatusCodes.NOT_FOUND).json(err);
    }
  } else {
    return res.status(StatusCodes.BAD_REQUEST);
  }
});

export default router;
