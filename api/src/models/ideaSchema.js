import mongoose from "mongoose";
import { User } from "./userSchema";
/**
 * Schema definition
 */

const Idea = new mongoose.Schema({
  content: { required: true, type: String },
  upVotes: { required: true, type: Number },
  downVotes: { required: true, type: Number },
  upVoters: { required: true, type: [User] },
  downVoters: { required: true, type: [User] },
  pinned: { required: true, type: Boolean },
  user: { required: true, type: String },
  lastModified: Date,
  createdAt: { required: true, type: Date },
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

const IdeaModel = mongoose.model("Idea", Idea);

export default IdeaModel;
