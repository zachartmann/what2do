import { Router } from "express";

const router = Router();

// Add sub-routes
router.get("/hi", async (req, res) => {
  return res.status(OK).json("Hello friend!")
};

export default router;
