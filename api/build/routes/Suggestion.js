"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _httpStatusCodes = require("http-status-codes");

var _suggestionSchema = _interopRequireDefault(require("../models/suggestionSchema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
/**
 * GET:
 */

router.get("/suggestions", async (req, res) => {
  const category = req.query.category;
  let suggestions;

  if (!category) {
    suggestions = await _suggestionSchema.default.find({});
  } else {
    suggestions = await _suggestionSchema.default.find({
      Category: category
    }).exec();
  }

  return res.status(StatusCodes.OK).json(suggestions);
});
/**
 * POST:
 */

router.post("/suggestion", async (req, res) => {
  const {
    suggestion,
    category
  } = req.body;
  let suggestionToCreate;

  if (req.body) {
    suggestionToCreate;
    new _suggestionSchema.default({
      suggestion,
      category
    });
  } else {
    suggestionToCreate = new _suggestionSchema.default({});
  }

  try {
    console.log(suggestionToCreate);
    suggestionToCreate.save(err => {
      if (err) {
        console.log("Suggestion was not able to be created");
        throw err;
      } else {
        console.log("Suggestion created succesfully");
      }
    });
  } catch (errResponse) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errResponse);
  }

  return res.status(StatusCodes.CREATED).json(suggestionToCreate);
});
var _default = router;
exports.default = _default;