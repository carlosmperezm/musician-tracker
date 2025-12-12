import "dotenv/config";
import { argv } from "node:process";
import { Pool } from "pg";

const CREATE_NOTES_QUERY = `
    CREATE TABLE IF NOT EXISTS notes(
    id SERIAL PRIMARY KEY,
    name CHAR(10) NOT NULL
    );

    INSERT INTO notes(name) VALUES('Do');
    INSERT INTO notes(name) VALUES('Do#');
    INSERT INTO notes(name) VALUES('Re');
    INSERT INTO notes(name) VALUES('Re#');
    INSERT INTO notes(name) VALUES('Mi');
    INSERT INTO notes(name) VALUES('Fa');
    INSERT INTO notes(name) VALUES('Fa#');
    INSERT INTO notes(name) VALUES('Sol');
    INSERT INTO notes(name) VALUES('Sol#');
    INSERT INTO notes(name) VALUES('La');
    INSERT INTO notes(name) VALUES('La#');
    INSERT INTO notes(name) VALUES('Si');
`;
const CREATE_SINGERS_QUERY = `
    CREATE TABLE IF NOT EXISTS singers(
    id SERIAL PRIMARY KEY,
    NAME TEXT NOT NULL
);

    INSERT INTO singers(name) VALUES('Jorge');
    INSERT INTO singers(name) VALUES('Lidia');
    INSERT INTO singers(name) VALUES('Amanda');
`;
const connection = argv[2];

async function main() {
    const pool = new Pool({ connectionString: connection });
    try {
        console.log("Seeding...");
        await pool.connect();
        await pool.query(CREATE_NOTES_QUERY);
        await pool.query(CREATE_SINGERS_QUERY);
        console.log("Done");
    } catch (err) {
        console.error(err);
    } finally {
        pool.end();
    }
}

main();