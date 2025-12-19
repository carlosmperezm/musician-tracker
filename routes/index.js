import { Router } from "express";
import songRouter from "./songRouter.js";
import singerRouter from "./singerRouter.js";
import { getAllSongsSingersAndTones } from "../controllers/singerSongToneController.js";

const appRouter = Router();

appRouter.get("/", getAllSongsSingersAndTones);
// TODO: Implement song-singer-tone creation

appRouter.use("/songs", songRouter);
appRouter.use("/singers", singerRouter)


export default appRouter;