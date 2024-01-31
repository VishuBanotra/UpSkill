import express, { urlencoded } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "./Middleware/errorHandler.js";

// Dotenv Config
dotenv.config();

const app = express();

// Middlewares
if (process.env.NODE_ENV != "production") {
  app.use(morgan("dev"));
}
app.use(helmet());
app.use(cors());
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(express.json());

//Routes
import userRoutes from "./Routes/userRoutes.js";
app.use("/api/v1", userRoutes);

// Error Middleware
app.use(errorHandler);

export default app;
