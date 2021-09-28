import mongoose from "mongoose";

/**
 * Schema definition
 */
export const User = new mongoose.Schema({
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
const UserModel = mongoose.model("User", User);

export default UserModel;
