import mongoose from "mongoose";

/**
 * Schema definition
 */

const Poll = new mongoose.Schema({
  pollId: { required: true, type: String },
  title: { required: true, type: String },
  theme: String,
  endDate: { required: true, type: Date },
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
