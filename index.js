import express from "express";
import pool from "./db/pool.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => res.send("Hi"));
app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`App listening at: localhost:${PORT}`);
});