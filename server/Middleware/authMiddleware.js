import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const tokenHeader = req.headers.authorization;

  if (tokenHeader) {
    const token = tokenHeader.split(" ")[1];

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
          res.status(401).json({ message: "User Not Found" });
        } else {
          req.user = user;
          next();
        }
      });
    }
  } else {
    res.status(404).json({ message: "User not Logged In." });
  }
};
