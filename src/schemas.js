import mongoose from "mongoose";
import { Schema } from "mongoose";
import { string } from "yargs";

const Poll = new Schema();

Poll.add({
  _id: Number,
  pollId: Number,
  title: string,
  endDate: Date,
  timeLimit: Number,
  ideaIds: [Idea],
});

const Idea = new Schema();
