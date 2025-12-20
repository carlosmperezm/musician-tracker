import pool from "./pool.js";

export async function getAllSingers() {
    const result = await pool.query("SELECT * FROM singers");
    return result.rows;
}
export async function getAllSongs() {
    const result = await pool.query("SELECT * FROM songs");
    return result.rows;
}
export async function getSongsSingerAndTones() {
    const result = await pool.query("SELECT * FROM songs_and_singers");
    return result.rows;
}
export async function getSingerById(id) {
    const result = await pool.query("SELECT * FROM singers WHERE id=$1", [id])
    return result.rows[0];
}
export async function getSongById(id) {
    const result = await pool.query("SELECT * FROM songs WHERE id=$1", [id])
    return result.rows[0];
}
export async function getToneById(id) {
    const result = await pool.query("SELECT * FROM tones WHERE id=$1", [id])
    return result.rows[0];
}
export async function createSinger(name) {
    await pool.query("INSERT INTO singers(name) VALUES($1)", [name]);
}
export async function createSong({ songName, interpreter, tempo, tone }) {
    await pool.query("INSERT INTO songs(name,interpreter,tempo,tone) VALUES($1,$2,$3,$4)", [songName, interpreter, tempo, tone]);
}
export async function createSongSingerRecord({ songId, singerId, toneId }) {
    await pool.query("INSERT INTO songs_and_singers(song,singer,tone) VALUES($1,$2,$3)", [songId, singerId, toneId]);
}
export async function deleteSinger(id) {
    await pool.query("DELETE FROM singers WHERE id=$1", [id]);
}