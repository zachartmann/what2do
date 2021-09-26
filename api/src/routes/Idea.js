import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import IdeaModel from "../models/ideaSchema";

const router = Router();

/**
 * GET: /idea
 */

router.get("/ideas", async (req, res) => {
  const ideas = await IdeaModel.find({});

  return res.status(StatusCodes.OK).json(ideas);
});

/**
 * POST: /idea
 */

router.post("/idea", async (req, res) => {
  let ideaToCreate;

  if (req.body) {
    const { content, upVotes, downVotes, upVoters, downVoters, pinned, user } =
      req.body;

    const ideaExists = await IdeaModel.find({ pinned, user });

    if (ideaExists) {
    }
    ideaToCreate = new IdeaModel({
      content,
      upVotes,
      downVotes,
      upVoters,
      downVoters,
      pinned,
      user,
    });
  } else {
    return res.status(StatusCodes.BAD_REQUEST);
  }

  try {
    ideaToCreate.save((err) => {
      if (err) {
        console.log("Something didn't work");
        throw err;
      } else {
        console.log("Something worked!");
      }
    });
  } catch (errResponse) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errResponse);
  }

  return res.status(StatusCodes.CREATED).json(pollToCreate);
});

export default router;
