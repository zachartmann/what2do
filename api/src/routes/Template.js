import { Router } from "express";
import { OK } from "http-status-codes";

const router = Router();

/**
 * GET: /template - retrieve templates
 */

// TODO
router.get("/template", async (req, res) => {
  const items = await getItems();
  return res.status(OK).json(items).end();
});

/**
 * POST: /template - create a template
 */

// TODO
router.post("/template", async (req, res) => {});

export default router;
