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
    });  }
  / else {
    suggestionToCreate = new SuggestionModel({

    });
  }

  try {
    console.log(suggestionToCreate)
    suggestionToCreate.save((err) => {
      if (err) {
        console.log("Suggestion was not able to be created");
        throw err;
      } else {
        console.log("Suggestion created succesfully");
      }
    });
  }


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
