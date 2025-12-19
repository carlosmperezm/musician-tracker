import * as db from "../db/queries.js";

export async function getAllSongsSingersAndTones(req, res) {
    const rows = await db.getSongsSingerAndTones();
    const songsSingersAndTones = [];
    for (const row of rows) {
        const song = await db.getSongById(Number(row.song));
        const singer = await db.getSingerById(Number(row.singer));
        const tone = await db.getToneById(Number(row.tone));
        songsSingersAndTones.push({ song: song.name, singer: singer.name, tone: tone.name });
    }
    return res.render("home", { songsSingersAndTones });
}
