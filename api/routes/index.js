import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

// Add sub-routes
router.get("/hi", async (req, res) => {
  return res.status(StatusCodes.OK).json("Hello friend!");
});

export default router;
