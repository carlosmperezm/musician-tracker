import { Router } from "express";

const songRouter = Router();

songRouter.get("/", (req, res) => res.send('Hi from songs routers'));

// TODO: Implement songs creation

export default songRouter;