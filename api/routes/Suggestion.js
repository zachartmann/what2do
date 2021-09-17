import { Router } from "express";
import { OK } from "http-status-codes";
import SuggestionModel from "../models/suggestionSchema";
import { useLocation } from "react-router-dom";

const router = Router();

/**
 * GET:
 */
router.get("/suggestions", async (req, res) => {
  const suggestions = await SuggestionModel.find({});

  return res.status(StatusCodes.OK).json(suggestions);
});

// I think this should be query param (since it is filtering by category)
// https://stackoverflow.com/questions/30967822/when-do-i-use-path-params-vs-query-params-in-a-restful-api
// https://stackoverflow.com/questions/17007997/how-to-access-the-get-parameters-after-in-express
router.get("/suggestions/:category", async (req, res) => {
  const category = String(req.params.category);
  if (!category) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json("Not a valid suggestion category");
  }

  const suggestions = await SuggestionModel.find({ Category: category });

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
