import { Router } from "express";
import songRouter from "./songRouter.js";
import singerRouter from "./singerRouter.js";

const appRouter = Router();

appRouter.use("/songs", songRouter);
appRouter.use("/singers", singerRouter)

appRouter.get("/", (req, res) => res.send("Hi from router"));

export default appRouter;