import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Admin from "../Model/admin.model.js";

export const adminMe = async (req, res, next) => {
  const admin = req.user;
  if (admin) {
    res.json({ sucess: true, admin: admin });
  }
};

export const adminLogin = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });

    if (admin) {
      const checkPassword = await admin.validatePassword(password);

      if (checkPassword) {
        const token = jwt.sign(
          {
            id: admin._id,
            username: admin.username,
            role: admin.role,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        res.json({
          sucess: true,
          message: "Admin Logged In Successfully",
          token,
        });
      } else {
        res.json({ success: false, message: "Password is Incorrect" });
      }
    } else {
      res.json({ message: "Admin not found." });
    }
  } catch (error) {
    next(error);
  }
};

export const adminSignup = async (req, res, next) => {
  const { name, username, password } = req.body;

  try {
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username });

    if (existingAdmin) {
      res.json({ sucess: false, message: "Admin already exists." });
    } else {
      const newAdmin = new Admin({ name, username });
      newAdmin.password = await newAdmin.hashingPassword(password);
      await newAdmin.save();

      res
        .status(200)
        .json({ sucess: true, message: "Admin Registered Successfully." });
    }
  } catch (error) {
    next(error);
  }
};
