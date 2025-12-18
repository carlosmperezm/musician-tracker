import { Router } from "express";

const singerRouter = Router();

singerRouter.get("/", (req, res) => res.send("Hello from singers router"));
//TODO: Implement singers creation

export default singerRouter;