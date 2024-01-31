import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter your name."],
  },
  username: {
    type: String,
    validate: [validator.isEmail, "Please enter a valid E-Mail."],
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
  purchasedCourses: [{
    type: mongoose.Schema.ObjectId,
    ref: "Course"
  }],
  role: {
    type: String,
    default: "user",
  },
});

// Hashing Passsword
userSchema.methods.generateHash = async function (password) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw error;
  }
};

// Validating Password
userSchema.methods.validatePassword = async function (password) {
  try {
    const validatedPassword = await bcrypt.compare(password, this.password);
    return validatedPassword;
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model("User", userSchema);

export default User;
