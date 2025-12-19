import * as db from "../db/queries.js";

export async function getAllSongs(req, res) {
    const rows = await db.getAllSongs();
    const songs = [];
    for (const song of rows) {
        const tone = await db.getToneById(song.tone);
        songs.push({ ...song, tone: tone.name });
    }
    return res.render("songsDetails", { songs });
}