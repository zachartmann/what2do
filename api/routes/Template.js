import { Router } from "express";
import { OK } from "http-status-codes";
import { getItems } from "../daos/Items";

const router = Router();

/**
 * GET: /items
 */

router.get("/user", async (req, res) => {
  const items = await getItems();
  return res.status(OK).json(items).end();
});

/**
 * POST: /item (DEVELOPMENT BUILD ONLY)
 */
router.post("/..", async (req, res) => {});

export default router;
