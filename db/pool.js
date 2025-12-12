import "dotenv/config"
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DB_CONNECTION })

async function getPgVersion() {
    const client = await pool.connect();
    try {
        const result = await client.query("SELECT version()");
        console.log(result.rows[0]);
    } finally {
        client.release();
    }
}

getPgVersion();

export default pool;