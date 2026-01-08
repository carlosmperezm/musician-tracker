import * as db from "../db/queries.js";
import passport from "passport";
import LocalStrategy from "passport-local";

async function verify(username, password, done) {
    try {
        const user = await db.getUserByUsername(username);
        if (!user) {
            return done(null, false, { message: "Incorrect username" });
        }
        if (user.password !== password) {
            return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
    } catch (error) {
        return done(error);
    }
}
const strategy = new LocalStrategy(verify)

passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
    try {
        const user = await db.getUserById(id);
        done(null, user);
    } catch (error) {
        done(error);
    }

});
