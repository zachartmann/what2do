import mongoose from "mongoose";

/**
 * Schema definition
 */

export const Feedback = new mongoose.Schema({
  content: { required: true, type: String },
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

const FeedbackModel = mongoose.model("Feedback", Feedback);

export default FeedbackModel;
