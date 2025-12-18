import * as db from "../db/queries.js";

export async function getAllSongs(req, res) {
    const songs = await db.getAllSongs();
    return res.send(songs);
}