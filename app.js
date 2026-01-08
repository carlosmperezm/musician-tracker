import "dotenv/config"
import express from "express";
import path from "node:path";
import appRouter from "./routes/index.js";
import passport from "passport";
import sessionStore from "./config/sessionConfig.js";
import "./config/passportConfig.js"

const app = express();
const PORT = process.env.PORT || 3000;

//configs
app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Passport configs
app.use(sessionStore);
app.use(passport.authenticate("session"))
app.use(passport.session());

app.use((req, res, next) => {
    console.log(req.session);
    console.log(req.user);
    console.log(req.isAuthenticated())
    next();
})

app.use("/", appRouter)

app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`App listening at: localhost:${PORT}`);
});