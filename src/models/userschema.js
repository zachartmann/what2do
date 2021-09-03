import mongoose from "mongoose";
import { Schema } from "mongoose";


/**
 * Schema definition
 */
const User = new Schema();

User.add({
    _id: Number,
    name: String,
    password: String,
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
mongoose.model("User", User);

export default User;
