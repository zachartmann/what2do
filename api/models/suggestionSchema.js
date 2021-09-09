import mongoose from "mongoose";

/**
 * Schema definition
 */
const Suggestion = new mongoose.Schema({
  _id: Number,
  suggestion: String,
  category: String
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

const SuggestionModel = mongoose.model("Suggestion", Suggestion);

export default SuggestionModel;
