import jwt from "jsonwebtoken";
import User from "../model/user.model";
import { Request, Response, NextFunction } from "express";

interface LoginType {
  username: string;
  password: string;
}

interface SignupType extends LoginType {
  name: string;
}

export const me = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.headers["userId"];
  res.status(200).json({
    success: true,
    user,
  });
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const inputs: LoginType = req.body;

  try {
    const user = await User.findOne({ username: inputs.username });

    if (user) {
      const isValidPassword = await user.validatePassword(inputs.password);

      if (isValidPassword) {
        const token = jwt.sign(
          {
            userId: user._id,
          },
          String(process.env.JWT_SECRET),
          { expiresIn: "1h" }
        );
        res.status(201).json({
          success: true,
          message: "User Logged in Successfully",
          token,
        });
      } else {
        res.json({ success: false, message: "Invalid Password." });
      }
    } else {
      res.json({ success: false, message: "User not found" });
    }
  } catch (error) {
    next(error);
  }
};

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const inputs: SignupType = req.body;

  try {
    const existingUser = await User.findOne({ username: inputs.username });

    if (existingUser) {
      res.json({ success: false, message: "User already registered." });
    } else {
      const newUser = new User({
        name: inputs.name,
        username: inputs.username,
      });
      newUser.password = await newUser.generateHash(inputs.password);
      await newUser.save();

      res.json({
        success: true,
        message: "User Created Successfully.",
      });
    }
  } catch (error) {
    next(error);
  }
};

// View Orders

const courses = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {}
};
