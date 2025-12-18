import * as db from "../db/queries.js";

export async function getAllSongsSingersAndTones(req, res) {
    const songsSingersAndTones = await db.getSongsSingerAndTones();
    return res.send(songsSingersAndTones);
}