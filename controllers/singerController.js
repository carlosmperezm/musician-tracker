import * as db from "../db/queries.js";

export async function getAllSingers(req, res) {
    const singers = await db.getAllSingers();
    return res.render("singersDetails", { singers })
}
export async function getSingerForm(req, res) {
    return res.render("singerForm");
}
export async function createSinger(req, res, next) {
    const name = req.body.singerName;
    await db.createSinger(name);
    next();
}
export async function deleteSinger(req, res, next) {
    await db.deleteSinger(req.params.singerId);
    next();
}
export async function updateSinger(req, res, next) {
    const singer = await db.getSingerById(req.params.singerId);
    res.render("singerForm", { singer });
    next()
}
