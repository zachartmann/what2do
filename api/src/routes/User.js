import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import UserModel from "../models/userSchema";
import { isEmpty } from "lodash";

const router = Router();

/**
 * POST: /user - create a user
 */

router.post("/user", async (req, res) => {
  if (!isEmpty(req.body)) {
    const { name, password } = req.body;
    const userToCreate = new UserModel({
      name,
      password,
    });

    try {
      await userToCreate.save();

      return res.status(StatusCodes.CREATED).json(userToCreate);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  } else {
    return res.sendStatus(StatusCodes.BAD_REQUEST);
  }
});

export default router;
