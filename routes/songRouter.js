import { Router } from "express";
import { createSong, deleteSong, getAllSongs, getSongForm } from "../controllers/songController.js";

const songRouter = Router();
songRouter.get("/", getAllSongs);

songRouter.get("/new", getSongForm);
songRouter.post("/new", createSong);
songRouter.get("/delete/:songId", deleteSong);

export default songRouter;