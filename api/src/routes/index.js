import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import CommentRouter from "./Comment";
import PollRouter from "./Poll";
import SuggestionRouter from "./Suggestion";
import TemplateRouter from "./Template";
import IdeaRouter from "./Idea";
import UserRouter from "./User";
import FeedbackRouter from "./Feedback";

const router = Router();

router.use(CommentRouter);
router.use(PollRouter);
router.use(SuggestionRouter);
router.use(TemplateRouter);
router.use(IdeaRouter);
router.use(UserRouter);
router.use(FeedbackRouter);

router.get("/", async (req, res) => {
  return res.status(StatusCodes.OK).json("This is the home page");
});

export default router;
