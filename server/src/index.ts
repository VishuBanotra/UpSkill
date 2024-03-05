import express, { urlencoded } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "../src/middleware/errorHandler";
// Dotenv Config
dotenv.config();

const app = express();

// Middlewares
if (process.env.NODE_ENV != "production") {
  app.use(morgan("dev"));
}
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(express.json());

//Routes
import { userRoute } from "../src/routes/userRoutes";
app.use("/api/v1", userRoute);

// Error Middleware
app.use(errorHandler);

export default app;
