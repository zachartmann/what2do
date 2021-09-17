import { Router } from "express";
import { OK } from "http-status-codes";
import SuggestionModel from "../models/suggestionSchema";

const router = Router();

/**
 * GET:
 */
router.get("/suggestions", async (req, res) => {
  const category = req.query.category;
  let suggestions;
  if (!category) {
    suggestions = await SuggestionModel.find({});
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

  if (req.body) {
    suggestionToCreate;
    new SuggestionModel({
      suggestion,
      category,
    });
  } else {
    suggestionToCreate = new SuggestionModel({});
  }

  try {
    console.log(suggestionToCreate);
    suggestionToCreate.save((err) => {
      if (err) {
        console.log("Suggestion was not able to be created");
        throw err;
      } else {
        console.log("Suggestion created succesfully");
      }
    });
  } catch (errResponse) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errResponse);
  }
  return res.status(StatusCodes.CREATED).json(suggestionToCreate);
});

export default router;
