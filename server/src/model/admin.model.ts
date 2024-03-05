import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

import { Document, Model, Schema } from "mongoose";

interface AdminType extends Document {
  name: string;
  username: string;
  password: string;
  publishedCourses: [];
  role: string;
  hashingPassword: (password: string) => any;
  validatePassword: (password: string) => boolean;
}

const adminSchema: Schema<AdminType> = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please Enter a valid Email Address."],
  },
  password: {
    type: String,
    required: true,
  },
  publishedCourses: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Courses",
    },
  ],
  role: {
    type: String,
    default: "instructor",
  },
});

// Hashing Password
adminSchema.methods.hashingPassword = async function (password: string) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw error;
  }
};

// Validating Password
adminSchema.methods.validatePassword = async function (password: string) {
  try {
    const checkPassword = await bcrypt.compare(password, this.password);
    return checkPassword;
  } catch (error) {
    throw error;
  }
};

const Admin: Model<AdminType> = mongoose.model("Admin", adminSchema);
export default Admin;
