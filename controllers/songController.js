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
export async function getSongForm(req, res) {
    return res.render("songForm");
}
export async function createSong(req, res) {
    const { songName, interpreterName, tempo, tone } = req.body;
    const newSong = { songName, tempo, tone, interpreter: interpreterName };
    await db.createSong(newSong);
    return res.redirect("/songs")
}
export async function deleteSong(req, res) {
    await db.deleteSong(req.params.songId);
    return res.redirect("/songs");
}