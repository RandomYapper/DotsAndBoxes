import express from "express";
import router from "./routes/index";
import { logger } from "./middleware/logger";

const app = express();

app.use(express.json());
app.use(logger);
app.use("/", router);

export default app;
