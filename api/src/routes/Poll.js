import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import PollModel from "../models/pollSchema";
import { isEmpty } from "lodash";

const router = Router();

/**
 * GET /polls
 */

router.get("/polls", async (req, res) => {
  const polls = await PollModel.find({}).exec();

  return res.status(StatusCodes.OK).json(polls);
});

router.get("/poll/:id", async (req, res) => {
  const pollId = req.params.id;

  try {
    const poll = await PollModel.findOne({ pollId }).exec();

    return res.status(StatusCodes.OK).json(poll);
  } catch (err) {
    return res.sendStatus(StatusCodes.NOT_FOUND);
  }
});

/**
 * POST /poll
 */

router.post("/poll", async (req, res) => {
  if (!isEmpty(req.body)) {
    const { pollId, title, endDate, timeLimit, ideaIds } = req.body;
    const pollToCreate = new PollModel({
      pollId,
      title,
      endDate: new Date(endDate),
      timeLimit,
      ideaIds,
    });

    try {
      await pollToCreate.save();

      return res.status(StatusCodes.CREATED).json(pollToCreate);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  } else {
    return res.sendStatus(StatusCodes.BAD_REQUEST);
  }
});

/**
 * DELETE: /poll/:id
 */

router.delete("/poll/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    await PollModel.deleteOne({ _id }).exec();

    return res.sendStatus(StatusCodes.OK);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});

export default router;
