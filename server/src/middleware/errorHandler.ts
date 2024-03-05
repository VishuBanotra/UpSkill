import { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
  status: number;
}

export const errorHandler = async (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message || "Internal Server Error.",
    },
  });
};
