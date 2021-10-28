import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import UserModel from "../models/userSchema";
import { isEmpty } from "lodash";

const router = Router();

/**
 * GET /user/:id - retrieve user
 */

router.post("/login", async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  try {
    let user = await UserModel.findOne({ name: name }).exec();

    if (!user)
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: "User does not exist" });

    var response = null;

    function matchPassword(name, password, callback) {
      UserModel.findOne({ name: name }, (err, userModel) => {
        if (err) throw err;
        console.log(userModel);
        userModel.comparePassword(password, (err, isMatch) => {
          console.log(password, isMatch);
          if (err) {
            throw err;
          } else {
            callback(isMatch);
          }
        });
      });
    }

    matchPassword(
      name,
      password,
      (isMatch) =>
        (response = isMatch
          ? res.status(StatusCodes.OK).json(user)
          : res
              .status(StatusCodes.UNAUTHORIZED)
              .json({ error: "Incorrect password" }))
    );

    return response;
  } catch (err) {
    console.log(name);
    console.log(password);
    console.log(err);
    return res.sendStatus(StatusCodes.NOT_FOUND);
  }
});

/**
 * POST /user - create a user
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
