import express from "express";
import pino from "pino";
import dotenv from "dotenv";
import middleware from "./middlewares/middleware.js";
import database from "./config/db.config.js";

dotenv.config();

const app = express();
const logger = pino();

middleware(app);
const start = () => {
  database();
  app.listen(process.env.PORT, () => {
    let port = process.env.PORT;
    if (port == null || port === "" || port === undefined || port < 1000) {
      port = 8000;
    }

    logger.info(`Server is running on port ${port}`);
  });
};
start();
export default logger;
