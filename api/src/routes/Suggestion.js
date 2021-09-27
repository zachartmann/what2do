import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import SuggestionModel from "../models/suggestionSchema";
import { isEmpty } from "lodash";

const router = Router();

/**
 * GET:
 */
router.get("/suggestions", async (req, res) => {
  const category = req.query.category;
  let suggestions;

  if (!category) {
    suggestions = await SuggestionModel.find({}).exec();
  } else {
    suggestions = await SuggestionModel.find({ Category: category }).exec();
  }
  return res.status(StatusCodes.OK).json(suggestions);
});

/**
 * POST:
 */

router.post("/suggestion", async (req, res) => {
  const { suggestion, category } = req.body;
  let suggestionToCreate;

  if (!isEmpty(req.body)) {
    suggestionToCreate;
    new SuggestionModel({
      suggestion,
      category,
    });
  } else {
    suggestionToCreate = new SuggestionModel({});
  }

  try {
    await suggestionToCreate.save();

    console.log("Suggestion created succesfully");
    return res.status(StatusCodes.CREATED).json(suggestionToCreate);
  } catch (errResponse) {
    console.log("Suggestion was not able to be created");
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errResponse);
  }
});

export default router;
