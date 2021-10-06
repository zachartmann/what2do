import mongoose from "mongoose";

/**
 * Schema definition
 */

const Comment = new mongoose.Schema({
  //commentId: Number,
  comment: { required: true, type: String },
  user: { required: true, type: String },
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

const CommentModel = mongoose.model("Comment", Comment);

export default CommentModel;
