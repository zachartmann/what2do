import mongoose from "mongoose";
import { Schema } from "mongoose";

/**
 * Schema definition
 */

const Comment = new Schema();

Comment.add({
  _id: Number,
  Comment: String,
  User: String,
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

mongoose.model("Comment", comment);




