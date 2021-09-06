import { Router } from "express";
import { OK } from "http-status-codes";
import IdeaModel from "../models/ideaSchema";

const router = Router();

/**
 * GET: /items
 */

router.get("/idea", async (req, res) => {
  const ideaToCreate = new IdeaModel({});
  ideaT;
  return res.status(OK).json(items).end();
});

/**
 * POST: /item (DEVELOPMENT BUILD ONLY)
 */
router.post("/..", async (req, res) => {});

export default router;
