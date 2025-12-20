import * as db from "../db/queries.js";

export async function getAllSingers(req, res) {
    const singers = await db.getAllSingers();
    return res.render("singersDetails", { singers })
}
export async function getSingerForm(req, res) {
    return res.render("singerForm");
}
export async function createSinger(req, res) {
    const name = req.body.singerName;
    await db.createSinger(name);
    return res.redirect("/singers");
}
export async function deleteSinger(req, res) {
    await db.deleteSinger(req.params.singerId);
    return res.redirect("/singers");
}
