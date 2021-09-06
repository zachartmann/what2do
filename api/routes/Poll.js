import { Router } from "express";
import { OK, StatusCodes } from "http-status-codes";
import PollModel from "../models/pollSchema";

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

// // Add sub-routes
// router.get("/hi", async (req, res) => {
//   return res.status(StatusCodes.OK).json("Hello friend!");
// });

// Add sub-routes
router.get("/poll", async (req, res) => {
  const pollToCreate = new PollModel({
    pollId: 1,
    title: "Test",
    endDate: new Date(),
    timeLimit: 10,
    ideaIds: [1],
  });
  pollToCreate.save((err) => {
    if (err) {
      console.log("Something didn't work");
    } else {
      console.log("Something worked!");
    }
  });
  return res.status(StatusCodes.OK).json("Hello friend! I saved your dummy");
});

export default router;
