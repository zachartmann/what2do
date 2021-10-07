import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import TemplateModel from "../models/templateSchema";
import { isEmpty } from "lodash";

const router = Router();

/**
 * GET: /templates - retrieve templates
 */

router.get("/templates", async (req, res) => {
  const templates = await TemplateModel.find({}).exec();

  return res.status(StatusCodes.OK).json(templates);
});

/**
 * GET /template/:id - retrieve template
 */

router.get("/template/:id", async (req, res) => {
  const templateId = req.params.id;

  try {
    const template = await TemplateModel.findOne({ templateId }).exec();

    return res.status(StatusCodes.OK).json(template);
  } catch (err) {
    return res.sendStatus(StatusCodes.NOT_FOUND);
  }
});

/**
 * POST: /template - create a template
 */

router.post("/template", async (req, res) => {
  if (!isEmpty(req.body)) {
    const { title, category, theme, timeLimit, ideaIds } = req.body;
    const templateToCreate = new TemplateModel({
      title,
      category,
      theme,
      timeLimit,
      ideaIds,
    });

    try {
      await templateToCreate.save();

      return res.status(StatusCodes.CREATED).json(templateToCreate);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  } else {
    return res.sendStatus(StatusCodes.BAD_REQUEST);
  }
});

/**
 * DELETE: /template/:id - delete a template
 */

router.delete("/template/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    await TemplateModel.deleteOne({ _id }).exec();

    return res.sendStatus(StatusCodes.OK);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
});

export default router;
