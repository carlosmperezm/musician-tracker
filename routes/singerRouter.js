import { Router } from "express";
import { getAllSingers, createSinger, getSingerForm, deleteSinger, updateSinger } from "../controllers/singerController.js";

const singerRouter = Router();

singerRouter.get("/", getAllSingers);
singerRouter.get("/new", getSingerForm);
singerRouter.post("/new", createSinger);

singerRouter.get("/delete/:singerId", deleteSinger);
singerRouter.get("/edit/:singerId", updateSinger);

export default singerRouter;