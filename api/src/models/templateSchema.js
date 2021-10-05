import mongoose from "mongoose";

/**
 * Schema definition
 */

const Template = new mongoose.Schema({
  title: { required: true, type: String },
  category: { required: true, type: String },
  theme: String,
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

const TemplateModel = mongoose.model("Template", Template);

export default TemplateModel;
