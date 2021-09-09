import mongoose from "mongoose";
import { User } from "./userSchema";
/**
 * Schema definition
 */

const Idea = new mongoose.Schema({
  content: String,
  upVotes: Number,
  downVotes: Number,
  upVoters: [User],
  downVoters: [User],
  pinned: Boolean,
  user: String
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
