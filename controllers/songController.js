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
export async function createSong(req, res, next) {
    const { songName, interpreterName, tempo, tone } = req.body;
    const newSong = { songName, tempo, tone, interpreter: interpreterName };
    await db.createSong(newSong);
    next()
}
export async function deleteSong(req, res, next) {
    await db.deleteSong(req.params.songId);
    next();
}
export async function updateSong(req, res) {
    const song = await db.getSongById(req.params.songId);
    const tone = await db.getToneById(song.tone);
    return res.render("songForm", { song, toneName: tone.name });
}