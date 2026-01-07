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
import { authenticate, getAuthForm } from "../controllers/auth.js";
import passport from "passport";


const appRouter = Router();

appRouter.get("/", getAllSongsSingersAndTones);
appRouter.get("/new", getSongSingerForm);
appRouter.post("/new", createSongSinger, redirectToHome);
appRouter.post("/delete/:recordId", authenticate, deleteRecord, redirectToHome);
appRouter.post("/edit/:recordId", authenticate, updateRecord);
appRouter.post("/new/:recordId", deleteRecord, createSongSinger, redirectToHome);
// appRouter.get("/auth/*path", getAuthForm);
appRouter.get("/login", getAuthForm);
appRouter.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
}));

appRouter.use("/songs", songRouter);
appRouter.use("/singers", singerRouter)


function redirectToHome(req, res) {
    return res.redirect("/");
}

export default appRouter;