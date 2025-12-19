import { Router } from "express";
import { getAllSingers, createSinger, getSingerForm } from "../controllers/singerController.js";

const singerRouter = Router();

singerRouter.get("/", getAllSingers);
singerRouter.get("/new", getSingerForm);
singerRouter.post("/new", createSinger);

export default singerRouter;