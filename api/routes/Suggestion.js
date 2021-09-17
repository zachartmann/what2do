import { Router } from "express";
import { OK } from "http-status-codes";
import SuggestionModel from "../models/suggestionSchema";

const router = Router();

/**
 * GET: /items
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
/**
 * POST: /item (DEVELOPMENT BUILD ONLY)
 */
//router.post("/..", async (req, res) => {});

export default router;
