import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import SuggestionModel from "../models/suggestionSchema";
import { isEmpty } from "lodash";

const router = Router();

/**
 * GET: /suggestions
 */

router.get("/suggestions", async (req, res) => {
  const category = req.query.category;
  let suggestions;

  if (!category) {
    suggestions = await SuggestionModel.find({}).exec();
  } else {
    suggestions = await SuggestionModel.find({ category }).exec();
  }
  return res.status(StatusCodes.OK).json(suggestions);
});

/**
 * POST: /suggestions
 */

router.post("/suggestion", async (req, res) => {
  if (!isEmpty(req.body)) {
    const { suggestion, category } = req.body;
    const suggestionToCreate = new SuggestionModel({
      suggestion,
      category,
    });

    try {
      await suggestionToCreate.save();

      return res.status(StatusCodes.CREATED).json(suggestionToCreate);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  } else {
    return res.sendStatus(StatusCodes.BAD_REQUEST);
  }
});

export default router;
