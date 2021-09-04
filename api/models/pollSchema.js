import mongoose from "mongoose";
import { Schema } from "mongoose";

/**
 * Schema definition
 */
const Poll = new Schema();

Poll.add({
  pollId: Number,
  title: String,
  endDate: Date,
  timeLimit: Number,
  ideaIds: [Number],
});

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

export default Poll;
