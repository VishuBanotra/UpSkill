import { Request, Response, NextFunction } from "express";

import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Admin from "../model/admin.model";

interface LoginType {
  username: string;
  password: string;
}

interface SignupType extends LoginType {
  name: string;
}

export const adminMe = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const admin = req.headers["userID"];
  if (admin) {
    res.json({ sucess: true, admin: admin });
  }
};

export const adminLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userData: LoginType = req.body;

  try {
    const admin = await Admin.findOne({ username: userData.username });

    if (admin) {
      const checkPassword = await admin.validatePassword(userData.password);

      if (checkPassword) {
        const token = jwt.sign(
          {
            userId: admin._id,
          },
          String(process.env.JWT_SECRET),
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

export const adminSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const inputs: SignupType = req.body;

  try {
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username: inputs.username });

    if (existingAdmin) {
      res.json({ sucess: false, message: "Admin already exists." });
    } else {
      const newAdmin = new Admin({
        name: inputs.name,
        username: inputs.username,
      });
      newAdmin.password = await newAdmin.hashingPassword(inputs.password);
      await newAdmin.save();

      res
        .status(200)
        .json({ sucess: true, message: "Admin Registered Successfully." });
    }
  } catch (error) {
    next(error);
  }
};
