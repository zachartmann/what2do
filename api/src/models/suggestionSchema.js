import mongoose from "mongoose";

/**
 * Schema definition
 */

const Suggestion = new mongoose.Schema({
  suggestion: { required: true, type: String },
  category: { required: true, type: String },
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
