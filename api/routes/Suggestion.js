import { Router } from "express";
import { OK } from "http-status-codes";

const router = Router();

/**
 * GET: /items
 */

router.post("/suggestion", async (req, res) => {
  const suggestion = await suggestionModel({});
  return res.status(OK).json(items).end();
});

/**
 * POST: /item (DEVELOPMENT BUILD ONLY)
 */
router.post("/..", async (req, res) => {});

export default router;
