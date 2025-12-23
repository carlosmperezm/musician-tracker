import { Router } from "express";
import {
    getAllSingers,
    createSinger,
    getSingerForm,
    deleteSinger,
    updateSinger,
} from "../controllers/singerController.js";
import { authenticate } from "../controllers/auth.js";

const singerRouter = Router();

singerRouter.get("/", getAllSingers);
singerRouter.get("/new", getSingerForm);
singerRouter.post("/new", createSinger, redirectToSingers);
singerRouter.post("/delete/:singerId", authenticate, deleteSinger, redirectToSingers);
singerRouter.get("/edit/:singerId", updateSinger);
singerRouter.post("/new/:singerId", deleteSinger, createSinger, redirectToSingers);


function redirectToSingers(req, res) {
    return res.redirect("/singers");
}

export default singerRouter;