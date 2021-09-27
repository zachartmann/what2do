import { Router } from "express";
import { OK } from "http-status-codes";
import IdeaModel from "../models/ideaSchema";

const router = Router();

/**
 * GET: /items
 */

router.post("/idea", async (req, res) => {
  const ideaToCreate = new IdeaModel({
    content: "IdeaContent",
    upVotes: 9,
    downVotes: 3,
    pinned: false,
  });
  ideaToCreate.save((err) => {
    if (err) {
      console.log("issue with the idea endpoint");
    } else {
      console.log("This idea endpoint worked");
    }
  });
  return res.status(StatusCodes.OK).json("IT WORKED");
});

/**
 * POST: /item (DEVELOPMENT BUILD ONLY)
 */
router.post("/..", async (req, res) => {});

export default router;
