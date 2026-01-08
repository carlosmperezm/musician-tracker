import { Router } from "express";
import { createSong, deleteSong, getAllSongs, getSongForm, updateSong } from "../controllers/songController.js";
import { authenticate } from "../controllers/auth.js";

const songRouter = Router();
songRouter.get("/", getAllSongs);

songRouter.get("/new", authenticate, getSongForm);
songRouter.post("/new", authenticate, createSong, redirectToSongs);
songRouter.get("/delete/:songId", authenticate, deleteSong, redirectToSongs);
songRouter.get("/edit/:songId", authenticate, updateSong);
songRouter.post("/new/:songId", authenticate, deleteSong, createSong, redirectToSongs);


function redirectToSongs(req, res) {
    return res.redirect("/songs");
}
export default songRouter;