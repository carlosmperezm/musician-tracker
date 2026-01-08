import { Router } from "express";
import passport from "passport";
import { getAuthForm } from "../controllers/auth.js";

const loginRouter = Router();

loginRouter.get("/", getAuthForm);
loginRouter.post("/", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
}));

export default loginRouter;