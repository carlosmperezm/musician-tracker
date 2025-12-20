import { Router } from "express";
import { getAllSingers, createSinger, getSingerForm, deleteSinger, updateSinger } from "../controllers/singerController.js";

const singerRouter = Router();

singerRouter.get("/", getAllSingers);
singerRouter.get("/new", getSingerForm);
singerRouter.post("/new", createSinger, redirectToSingers);
singerRouter.get("/delete/:singerId", deleteSinger, redirectToSingers);
singerRouter.get("/edit/:singerId", updateSinger);
singerRouter.post("/new/:singerId", deleteSinger, createSinger, redirectToSingers);

function redirectToSingers(req, res) {
    return res.redirect("/singers");
}
export default singerRouter;