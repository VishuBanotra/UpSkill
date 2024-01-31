import jwt from "jsonwebtoken";
import User from "../Model/user.model.js";

export const me = async (req, res, next) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
};

export const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user) {
      const isValidPassword = await user.validatePassword(password);

      if (isValidPassword) {
        const token = jwt.sign(
          {
            id: user._id,
            name: user.name,
            username: user.username,
            role: user.role,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        res.status(201).json({
          sucess: true,
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

export const signup = async (req, res, next) => {
  const { name, username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      res.json({ success: false, message: "User already registered." });
    } else {
      const newUser = new User({ name, username });
      newUser.password = await newUser.generateHash(password);
      await newUser.save();

      res.json({
        sucess: true,
        message: "User Created Successfully.",
      });
    }
  } catch (error) {
    next(error);
  }
};
