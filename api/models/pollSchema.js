import mongoose from "mongoose";

/**
 * Schema definition
 */
const Poll = new mongoose.Schema();

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
const PollModel = mongoose.model("Poll", Poll);

export default PollModel;
