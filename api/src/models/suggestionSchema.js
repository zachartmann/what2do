import mongoose from "mongoose";

/**
 * Schema definition
 */
const Suggestion = new mongoose.Schema();

Suggestion.add({
  _id: Number,
  Suggestion: String,
  Category: String
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
