import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Comnnected to database");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});

// path: /api/index.js

app.use("/api/user", userRoutes);
