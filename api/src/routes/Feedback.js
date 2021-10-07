import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import FeedbackModel from "../models/feedbackSchema";
import { isEmpty } from "lodash";

const router = Router();

/**
 * GET: /feedback
 */

router.get("/feedback", async (req, res) => {
  const feedback = await FeedbackModel.find({}).exec();

  return res.status(StatusCodes.OK).json(feedback);
});

/**
 *  POST: /feedback
 */

router.post("/feedback", async (req, res) => {
  if (!isEmpty(req.body)) {
    const { content } = req.body;

    const feedbackToCreate = new FeedbackModel({
      content,
    });

    try {
      await feedbackToCreate.save();

      return res.status(StatusCodes.CREATED).json(feedbackToCreate);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  } else {
    return res.status(StatusCodes.BAD_REQUEST);
  }
});

export default router;
