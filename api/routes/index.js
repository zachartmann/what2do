import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import PollModel from "../models/pollSchema";

import PollRouter from "./Poll";
import SuggestionRouter from "./Suggestion";
import TemplateRouter from "./Template";
import IdeaRouter from "./Idea";
import UserRouter from "./User";

const router = Router();

router.use(PollRouter);
router.use(ModelBRouter);
router.use(ModelCRouter);
router.use(PollRouter);
router.use(PollRouter);


export default router;
