import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import CommentRouter from "./Comment";
import PollRouter from "./Poll";
import SuggestionRouter from "./Suggestion";
import TemplateRouter from "./Template";
import IdeaRouter from "./Idea";
import UserRouter from "./User";

const router = Router();

router.use(PollRouter);
router.use(SuggestionRouter);
router.use(TemplateRouter);
router.use(IdeaRouter);
router.use(UserRouter);

export default router;
