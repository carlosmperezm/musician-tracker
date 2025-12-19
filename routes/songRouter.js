import { Router } from "express";
import { createSong, getAllSongs, getSongForm } from "../controllers/songController.js";

const songRouter = Router();
songRouter.get("/", getAllSongs);

songRouter.get("/new", getSongForm);
songRouter.post("/new", createSong);

export default songRouter;