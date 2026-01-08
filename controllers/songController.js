import * as db from "../db/queries.js";

export async function getAllSongs(req, res) {
    const rows = await db.getAllSongs();
    const songs = [];
    for (const song of rows) {
        const tone = await db.getToneById(song.tone);
        const tempo = await db.getTempoById(song.tempo)
        songs.push({ ...song, tone, tempo });
    }
    return res.render("songsDetails", { songs });
}
export async function getSongForm(req, res) {
    const tones = await db.getAllNotes();
    const tempos = await db.getAllTempos();
    return res.render("songForm", { tones, tempos });
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
    const tempo = await db.getTempoById(song.tempo);
    const tempos = await db.getAllTempos();
    const tones = await db.getAllNotes();

    return res.render("songForm", { song: { ...song, tone, tempo }, tones, tempos, toneName: tone.name });
}