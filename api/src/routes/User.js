import { Router } from "express";
import { OK } from "http-status-codes";

const router = Router();

/**
 * GET: /user - retrieve users
 */

// TODO
router.get("/users", async (req, res) => {
  const items = await getItems();
  return res.status(OK).json(items).end();
});

/**
 * POST: /user - create a user
 */

// TODO
router.post("/user", async (req, res) => {});

export default router;
