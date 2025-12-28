import "dotenv/config";

export async function authenticate(req, res, next) {
    if (
        req.body.username !== process.env.USERNAME ||
        req.body.password !== process.env.PASSWORD
    ) {
        return res.send("Wrong admin credentials");
    }
    return next();
}

export async function getAuthForm(req, res) {
    const url = req.params.path.join("/");
    return res.render("authForm", { path: url })
}