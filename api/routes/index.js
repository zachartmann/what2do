import { Router } from "express";

import CommentRouter from "./Comment";
import PollRouter from "./Poll";
import SuggestionRouter from "./Suggestion";
import TemplateRouter from "./Template";
import IdeaRouter from "./Idea";
import UserRouter from "./User";

const router = Router();

router.use(CommentRouter);
router.use(PollRouter);
router.use(SuggestionRouter);
router.use(TemplateRouter);
router.use(IdeaRouter);
router.use(UserRouter);

router.get("/hi", async (req, res) => {
    return res.status(StatusCodes.OK).json("Hello friend!");
});

router.get("/", async (req, res) => {
    return res.status(StatusCodes.OK).json("This is the home page lmao");
});

export default router;
