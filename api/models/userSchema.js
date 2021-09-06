import mongoose from "mongoose";


/**
 * Schema definition
 */
const User = new mongoose.Schema();

User.add({
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
