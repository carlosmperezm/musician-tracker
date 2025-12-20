import { Router } from "express";
import { createSong, deleteSong, getAllSongs, getSongForm, updateSong } from "../controllers/songController.js";

const songRouter = Router();
songRouter.get("/", getAllSongs);

songRouter.get("/new", getSongForm);
songRouter.post("/new", createSong, redirectToSongs);
songRouter.get("/delete/:songId", deleteSong, redirectToSongs);
songRouter.get("/edit/:songId", updateSong);
songRouter.post("/new/:songId", deleteSong, createSong, redirectToSongs);


function redirectToSongs(req, res) {
    return res.redirect("/songs");
}
export default songRouter;