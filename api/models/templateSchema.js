import mongoose from "mongoose";

/**
 * Schema definition
 */
const Template = new mongoose.Schema({
  title: String,
  category: String,
  theme: String,
  timeLimit: Number,
  ideaIds: [Number]
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
const TemplateModel = mongoose.model("Template", Template);

export default TemplateModel;
