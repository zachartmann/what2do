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
  const { pollId, title, endDate, timeLimit, ideaIds } = req.query;
  let pollToCreate;

  if (req.query) {
    pollToCreate = new PollModel({
      pollId,
      title,
      endDate,
      timeLimit,
      ideaIds,
    });
  } else {
    pollToCreate = new PollModel({
      pollId: 1,
      title: "Test",
      endDate: new Date(),
      timeLimit: 10,
      ideaIds: [1],
    });
  }

  pollToCreate.save((err) => {
    if (err) {
      console.log("Something didn't work");
      return res.status(StatusCodes.OK).json(pollToCreate);
    } else {
      console.log("Something worked!");
    }
  });

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json("Problem saving the record");
});

export default router;
