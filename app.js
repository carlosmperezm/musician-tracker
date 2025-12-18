import express from "express";
import pool from "./db/pool.js";

import appRouter from "./routes/index.js";

const app = express();
const PORT = 3000;

app.use("/", appRouter)

app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`App listening at: localhost:${PORT}`);
});