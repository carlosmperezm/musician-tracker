import { Router } from "express";
import { createSong, deleteSong, getAllSongs, getSongForm, updateSong } from "../controllers/songController.js";
import { authenticate } from "../controllers/auth.js";

const songRouter = Router();
songRouter.get("/", getAllSongs);

songRouter.get("/new", getSongForm);
songRouter.post("/new", createSong, redirectToSongs);
songRouter.post("/delete/:songId", authenticate, deleteSong, redirectToSongs);
songRouter.post("/edit/:songId", authenticate, updateSong);
songRouter.post("/new/:songId", deleteSong, createSong, redirectToSongs);


function redirectToSongs(req, res) {
    return res.redirect("/songs");
}
export default songRouter;