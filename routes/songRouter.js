import { Router } from "express";
import { getAllSongs } from "../controllers/songController.js";

const songRouter = Router();
songRouter.get("/", getAllSongs);

// TODO: Implement songs creation

export default songRouter;