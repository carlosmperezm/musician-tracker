import "dotenv/config";
import { argv } from "node:process";
import { Pool } from "pg";

const CREATE_NOTES_QUERY = `
    CREATE TABLE IF NOT EXISTS tones(
    id SERIAL PRIMARY KEY,
    name CHAR(10) NOT NULL
    );

    INSERT INTO tones(name) VALUES('C');
    INSERT INTO tones(name) VALUES('C#');
    INSERT INTO tones(name) VALUES('D');
    INSERT INTO tones(name) VALUES('D#');
    INSERT INTO tones(name) VALUES('E');
    INSERT INTO tones(name) VALUES('E#');
    INSERT INTO tones(name) VALUES('F#');
    INSERT INTO tones(name) VALUES('G');
    INSERT INTO tones(name) VALUES('G#');
    INSERT INTO tones(name) VALUES('A');
    INSERT INTO tones(name) VALUES('A#');
    INSERT INTO tones(name) VALUES('B');
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

const CREATE_SONGS_QUERY = `
    CREATE TABLE IF NOT EXISTS songs(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    original_interpreter TEXT,
    tempo TEXT,
    tone INT REFERENCES tones(id)
    );

    INSERT INTO songs(name, original_interpreter, tempo, tone)
        VALUES('God my lord', 'Mariano', '4/4', 2);
    INSERT INTO songs(name, original_interpreter, tempo, tone)
        VALUES('God my lord2', 'Mariano', '6/8', 7);
    INSERT INTO songs(name, original_interpreter, tempo, tone)
        VALUES('God my lord3', 'Mariano', '2/4', 9);
`;

const CREATE_SONGS_SINGERS_NOTES_TABLE_QUERY = `
    CREATE TABLE IF NOT EXISTS songs_and_singers(
        id SERIAL PRIMARY KEY,
        name INT REFERENCES songs(id),
        singer INT REFERENCES tones(id),
        tone INT REFERENCES tones(id)
    );

    INSERT INTO songs_and_singers(name, singer, tone)
        VALUES(1,3,5);
    INSERT INTO songs_and_singers(name, singer, tone)
        VALUES(3,1,4);
    INSERT INTO songs_and_singers(name, singer, tone)
        VALUES(2,1,9);
`;
const connection = argv[2];

async function main() {
    const pool = new Pool({ connectionString: connection });
    try {
        console.log("Seeding...");
        await pool.connect();
        await pool.query(CREATE_NOTES_QUERY);
        await pool.query(CREATE_SINGERS_QUERY);
        await pool.query(CREATE_SONGS_QUERY);
        await pool.query(CREATE_SONGS_SINGERS_NOTES_TABLE_QUERY);
        console.log("Done");
    } catch (err) {
        console.error(err);
    } finally {
        pool.end();
    }
}

main();