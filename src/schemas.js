import mongoose from "mongoose";
import { Schema } from "mongoose";

/**
 * Schema definition
 */

const Poll = new Schema();

Poll.add({
  _id: Number,
  pollId: Number,
  title: String,
  endDate: Date,
  timeLimit: Number,
  ideaIds: [Idea],
});

const Idea = new Schema();

/**
 * Accessing a specific schema type by key
 */

/**
 * Methods
 */

/**
 * Define model.
 */

mongoose.model("Poll", Poll);
