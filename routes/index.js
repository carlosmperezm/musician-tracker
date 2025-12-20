import { Router } from "express";
import songRouter from "./songRouter.js";
import singerRouter from "./singerRouter.js";
import { getAllSongsSingersAndTones, getSongSingerForm, createSongSinger, deleteRecord } from "../controllers/singerSongToneController.js";

const appRouter = Router();

appRouter.get("/", getAllSongsSingersAndTones);
appRouter.get("/new", getSongSingerForm);
appRouter.post("/new", createSongSinger);
appRouter.get("/delete/:recordId", deleteRecord);

appRouter.use("/songs", songRouter);
appRouter.use("/singers", singerRouter)


export default appRouter;