import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import IdeaModel from "../models/ideaSchema";

const router = Router();

/**
 * GET: /idea
 */

router.get("/ideas", async (req, res) => {
  const ideas = await IdeaModel.find({});

  return res.status(StatusCodes.OK).json(ideas);
});

/**
 * POST: /idea
 */

router.post("/idea", async (req, res) => {
  if (req.body) {
    const {
      _id,
      content,
      upVotes,
      downVotes,
      upVoters,
      downVoters,
      pinned,
      user,
    } = req.body;

    if (_id) {
      // Edit idea if record exists instead
      const updatedModel = {
        _id,
        content,
        upVotes,
        downVotes,
        upVoters,
        downVoters,
        pinned,
        user,
      };

      try {
        IdeaModel.findOneAndUpdate({ _id }, updatedModel, (err, obj) => {
          if (err) {
            console.log("Something didn't work");
            throw err;
          } else {
            console.log("Something worked!");
            return res.status(StatusCodes.OK);
          }
        });
      } catch (errResponse) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errResponse);
      }
    }

    const ideaToCreate = new IdeaModel({
      content,
      upVotes,
      downVotes,
      upVoters,
      downVoters,
      pinned,
      user,
    });

    try {
      ideaToCreate.save((err) => {
        if (err) {
          console.log("Something didn't work");
          throw err;
        } else {
          console.log("Something worked!");
          return res.status(StatusCodes.CREATED).json(ideaToCreate);
        }
      });
    } catch (errResponse) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errResponse);
    }
  } else {
    return res.status(StatusCodes.BAD_REQUEST);
  }
});

/**
 * POST: /idea
 */

router.delete("/idea", async (req, res) => {
  if (req.body) {
    const { _id } = req.body;

    try {
      IdeaModel.deleteOne({ _id }, (err) => {
        if (err) {
          console.log("Something didn't work");
          throw err;
        } else {
          console.log("Something worked!");
        }
      });

      return res.status(StatusCodes.OK);
    } catch (errResponse) {
      return res.status(StatusCodes.NOT_FOUND).json(errResponse);
    }
  } else {
    return res.status(StatusCodes.BAD_REQUEST);
  }
});

export default router;
