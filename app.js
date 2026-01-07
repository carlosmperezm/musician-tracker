import "dotenv/config"
import express from "express";
import pool from "./db/pool.js";
import path from "node:path";
import appRouter from "./routes/index.js";
import passport from "passport";
import connectPgSimple from "connect-pg-simple";
import session from "express-session";

const app = express();
const PORT = process.env.PORT || 3000;

const pgStore = connectPgSimple(session);
const sessionStore = session({
    store: new pgStore({ pool }),
    secret: process.env.SESSION_SIGN,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 } // 1 day
});
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
    console.log(req.user); //TODO: the user is not in the request object. Meaning is not authenticated idk why :( 
    console.log(req.isAuthenticated())
    next();
})

app.use("/", appRouter)

app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`App listening at: localhost:${PORT}`);
});