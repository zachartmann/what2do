import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import PollModel from "../models/pollSchema";

const router = Router();

/**
 * GET
 */

router.get("/polls", async (req, res) => {
  const polls = await PollModel.find({});

  return res.status(StatusCodes.OK).json(polls);
});

router.get("/poll/:id", async (req, res) => {
  const pollId = Number(req.params.id);
  if (!pollId) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json("Poll id is not a valid number");
  }

  const poll = await PollModel.findOne({ pollId });

  if (poll) {
    return res.status(StatusCodes.OK).json(poll);
  }

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json("Something bad happened");
});

/**
 * POST
 */

router.post("/poll", async (req, res) => {
  let pollToCreate;

  if (req.body) {
    const { pollId, title, endDate, timeLimit, ideaIds } = req.body;
    pollToCreate = new PollModel({
      pollId,
      title,
      endDate: new Date(endDate),
      timeLimit,
      ideaIds: ideaIds.map((ideaId) => Number(ideaId)),
    });
  } else {
    return res.status(StatusCodes.BAD_REQUEST);
  }

  try {
    pollToCreate.save((err) => {
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
