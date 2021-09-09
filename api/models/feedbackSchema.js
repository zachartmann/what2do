import mongoose from "mongoose";

/**
 * Schema definition
 */

const Feedback = new mongoose.Schema({
  feedback: String
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
