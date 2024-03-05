import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tokenHeader = req.headers.authorization;

  if (tokenHeader) {
    const token = tokenHeader.split(" ")[1];

    if (token) {
      jwt.verify(token, String(process.env.JWT_SECRET), (err, user) => {
        if (err) {
          res.status(401).json({ message: "User Not Found" });
        } else {
          if (!user) {
            return res.status(403);
          }
          if (typeof user === "string") {
            return res.send(403);
          }

          req.headers["userId"] = user.userId;
          next();
        }
      });
    }
  } else {
    res.status(404).json({ message: "User not Logged In." });
  }
};
