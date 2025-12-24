import express from "express";
import pool from "./db/pool.js";
import path from "node:path";
import appRouter from "./routes/index.js";

const app = express();
const PORT = 3000;

//configs
app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", appRouter)

app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`App listening at: localhost:${PORT}`);
});