import * as db from "../db/queries.js";

export async function getAllSingers(req, res) {
    const singers = await db.getAllSingers();
    return res.render("singersDetails", { singers })
}
