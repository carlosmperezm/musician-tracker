import { Router } from "express";
import { getAllSingers } from "../controllers/singerController.js";

const singerRouter = Router();

singerRouter.get("/", getAllSingers);
//TODO: Implement singers creation

export default singerRouter;