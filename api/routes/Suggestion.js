import { Router } from "express";
import { OK } from "http-status-codes";
import SuggestionModel from "../models/suggestionSchema";

const router = Router();

/**
 * GET: /items
 */

router.post("/createSuggestion", async (req, res) => {
  //const suggestion = await suggestionModel({});
  let sug = new SuggestionModel({
    Suggestion: answer,
    Category: cat,
  });
  sug.save((err) => {
    if (err) {
      console.log("SUGGESTIONS NOT WORKING BOI");
    } else {
      console.log("SUGGESTIONS WORKING BOI");
    }
  });
  return res.status(OK).json("SUGGESTIONS BOI");
});

/**
 * POST: /item (DEVELOPMENT BUILD ONLY)
 */
//router.post("/..", async (req, res) => {});

export default router;
