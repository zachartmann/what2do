import mongoose from "mongoose";
import { Schema } from "mongoose";
import Poll from "./pollSchema";

/**
 * Schema definition
 */

const Poll = new Schema();

Poll.add({
  _id: Number,
  pollId: Number,
  title: String,
  endDate: Date,
  timeLimit: Number,
  ideaIds: [Idea],
});

// const Idea = new Schema(); new idea should be in a seperate module

/**
 * Accessing a specific schema type by key
 */

/**
 * Methods
 */

/**
 * Define model.
 */

mongoose.model("Poll", Poll);
