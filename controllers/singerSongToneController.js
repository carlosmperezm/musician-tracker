import * as db from "../db/queries.js";

export async function getAllSongsSingersAndTones(req, res) {
    const rows = await db.getSongsSingerAndTones();
    const songsSingersAndTones = [];
    for (const row of rows) {
        const song = await db.getSongById(Number(row.song));
        const singer = await db.getSingerById(Number(row.singer));
        const tone = await db.getToneById(Number(row.tone));
        songsSingersAndTones.push({ id: row.id, song: song.name, singer: singer.name, tone: tone.name });
    }
    return res.render("home", { songsSingersAndTones });
}
export async function getSongSingerForm(req, res) {
    const songs = await db.getAllSongs();
    const singers = await db.getAllSingers();
    return res.render("songSingerForm", { songs, singers });
}
export async function createSongSinger(req, res, next) {
    const newRecord = {
        songId: req.body.songId,
        singerId: req.body.singerId,
        toneId: req.body.toneId
    };
    await db.createSongSingerRecord(newRecord);
    return next();
}
export async function deleteRecord(req, res, next) {
    await db.deleteSongSingerRecord(req.params.recordId);
    return next();
}
export async function updateRecord(req, res) {
    const record = await db.getSongSingerAndTone(req.params.recordId);
    const song = await db.getSongById(record.song);
    const singer = await db.getSingerById(record.singer);
    const tone = await db.getToneById(record.tone);
    const songSingerTone = { id: record.id, song: song, singer: singer, tone: tone };
    const songs = await db.getAllSongs();
    const singers = await db.getAllSingers();
    return res.render(
        "songSingerForm", { record: songSingerTone, songs, singers }
    );
}