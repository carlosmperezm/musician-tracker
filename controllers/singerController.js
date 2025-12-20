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
export async function updateSinger(req, res) {
    const singer = await db.getSingerById(req.params.singerId);
    await db.deleteSinger(singer.id);
    return res.render("singerForm", { singer });
}
