import mongoose from "mongoose";

/**
 * Schema definition
 */

const Comment = new mongoose.Schema();

Comment.add({
  commentId: Number,
  comment: String,
  user: String,
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
