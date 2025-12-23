import { Router } from "express";
import songRouter from "./songRouter.js";
import singerRouter from "./singerRouter.js";
import {
    getAllSongsSingersAndTones,
    getSongSingerForm,
    createSongSinger,
    deleteRecord,
    updateRecord
} from "../controllers/singerSongToneController.js";
import { getAuthForm } from "../controllers/auth.js";

const appRouter = Router();

appRouter.get("/", getAllSongsSingersAndTones);
appRouter.get("/new", getSongSingerForm);
appRouter.post("/new", createSongSinger, redirectToHome);
appRouter.get("/delete/:recordId", deleteRecord, redirectToHome);
appRouter.get("/edit/:recordId", updateRecord);
appRouter.post("/new/:recordId", deleteRecord, createSongSinger, redirectToHome);
appRouter.get("/auth/*path", getAuthForm);


appRouter.use("/songs", songRouter);
appRouter.use("/singers", singerRouter)


function redirectToHome(req, res) {
    return res.redirect("/");
}

export default appRouter;