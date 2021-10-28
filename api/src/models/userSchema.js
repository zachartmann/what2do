import mongoose from "mongoose";
import bcrypt from "bcrypt";

/**
 * Schema definition
 */

export const User = new mongoose.Schema({
  name: { required: true, type: String },
  password: { required: false, type: String },
});

const SALT_WORK_FACTOR = 10;

User.pre("save", function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

User.methods.comparePassword = async function (candidatePassword, cb) {
  await bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const UserModel = mongoose.model("User", User);

export default UserModel;
