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
singerRouter.get("/new", authenticate, getSingerForm);
singerRouter.post("/new", authenticate, createSinger, redirectToSingers);
singerRouter.get("/delete/:singerId", authenticate, deleteSinger, redirectToSingers);
singerRouter.get("/edit/:singerId", authenticate, updateSinger);
singerRouter.post("/new/:singerId", authenticate, deleteSinger, createSinger, redirectToSingers);


function redirectToSingers(req, res) {
    return res.redirect("/singers");
}

export default singerRouter;