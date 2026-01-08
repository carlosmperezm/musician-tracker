import "dotenv/config"
import pool from "../db/pool.js";
import connectPgSimple from "connect-pg-simple";
import session from "express-session";

const pgStore = connectPgSimple(session);

const sessionStore = session({
    store: new pgStore({ pool, createTableIfMissing: true }),
    secret: process.env.SESSION_SIGN,
    resave: false,
    saveUninitialized: false,
    // cookie: { maxAge: 24 * 60 * 60 * 1000 } // 1 day
    cookie: { maxAge: 9000 }
});

export default sessionStore;