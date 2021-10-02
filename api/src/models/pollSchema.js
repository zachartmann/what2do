import mongoose from "mongoose";

/**
 * Schema definition
 */
const Poll = new mongoose.Schema({
  pollId: String,
  title: String,
  endDate: Date,
  timeLimit: Number,
  ideaIds: [String],
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
const PollModel = mongoose.model("Poll", Poll);

export default PollModel;
