import mongoose from "mongoose";
import { Schema } from "mongoose";
import Poll from "./pollSchema";

mongoose.model("Poll", Poll);
