import mongoose from "mongoose";

/**
 * Schema definition This is the Comment Schema includes two components the comment which is a string type
 * And also contains the user which is a String type
 * Both of these Schema components are required
 */

const Comment = new mongoose.Schema({
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
