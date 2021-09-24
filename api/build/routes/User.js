"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _httpStatusCodes = require("http-status-codes");

const router = (0, _express.Router)();
/**
 * GET: /items
 */

router.get("/user", async (req, res) => {
  const items = await getItems();
  return res.status(_httpStatusCodes.OK).json(items).end();
});
/**
 * POST: /item (DEVELOPMENT BUILD ONLY)
 */

router.post("/..", async (req, res) => {});
var _default = router;
exports.default = _default;