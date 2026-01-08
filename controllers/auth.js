export async function authenticate(req, res, next) {
    if (req.isAuthenticated()) {
        console.log("Authenticated")
        return next();
    }
    // return res.status(401).send("You're no authorized");
    return res.redirect("/login");
}

export async function getAuthForm(req, res) {
    return res.render("authForm");
}
