import { Router } from "express";
import songRouter from "./songRouter.js";
import singerRouter from "./singerRouter.js";
import loginRouter from "./login.js";
import {
    getAllSongsSingersAndTones,
    getSongSingerForm,
    createSongSinger,
    deleteRecord,
    updateRecord
} from "../controllers/singerSongToneController.js";
import { authenticate } from "../controllers/auth.js";


const appRouter = Router();

appRouter.get("/", getAllSongsSingersAndTones);
appRouter.get("/new", authenticate, getSongSingerForm);
appRouter.post("/new", authenticate, createSongSinger, redirectToHome);
appRouter.get("/delete/:recordId", authenticate, deleteRecord, redirectToHome);
appRouter.get("/edit/:recordId", authenticate, updateRecord);
appRouter.post("/new/:recordId", authenticate, deleteRecord, createSongSinger, redirectToHome);

appRouter.use("/login", loginRouter);
appRouter.use("/songs", songRouter);
appRouter.use("/singers", singerRouter)

function redirectToHome(req, res) {
    return res.redirect("/");
}

export default appRouter;