import pool from "./pool.js";

export async function getAllSingers() {
    const result = await pool.query("SELECT * FROM singers");
    return result.rows;
}
export async function getAllSongs() {
    const result = await pool.query("SELECT * FROM songs");
    return result.rows;
}