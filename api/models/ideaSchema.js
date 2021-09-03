import mongoose from "mongoose";
import { Schema } from "mongoose";
import User from "./userSchema";
/**
 * Schema definition
 */
 
const Idea = new Schema({
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

export default Idea;
