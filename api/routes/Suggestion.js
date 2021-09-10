import { Router } from "express";
import { OK } from "http-status-codes";
import SuggestionModel from "../models/suggestionSchema";

const router = Router();

/**
 * GET: /items
 */

router.post("/createSuggestion", async (req, res) => {

  let suggestionToCreate = new SuggestionModel({
    suggestion: var1, //To be defined
    category: var2, //To be defined
  });
  
  suggestionToCreate.save((err) => {
    if (err) {
      console.log("Suggestion was not able to be created");
    } else {
      console.log("Sample suggestion succesfully created");
    }
  });
  return res.status(OK).json("SUGGESTIONS WORKING BOI");
});

router.post("/getSuggestion", async (req, res) => {
  //Endpoint which will be used to fetch relevant suggestions from database
});

/**
 * POST: /item (DEVELOPMENT BUILD ONLY)
 */
//router.post("/..", async (req, res) => {});

export default router;
