const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
require('dotenv').config();

async function runMigrations() {
    const client = new Client({
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DB_POCKET_CART,
        password: process.env.POSTGRES_USER_PASSWORD,
        port: process.env.POSTGRES_PORT,
    });

    try {
        await client.connect();

        const migrationsDir = path.join(__dirname, 'migrations');
        const files = fs.readdirSync(migrationsDir).sort();

        for (const file of files) {
            const filePath = path.join(migrationsDir, file);
            const sql = fs.readFileSync(filePath, 'utf8');
            console.log(`Running migration: ${file}`);
            await client.query(sql);
        }

        console.log('All migrations applied successfully.');
    } catch (error) {
        console.error('Error running migrations:', error);
    } finally {
        await client.end();
    }
}

runMigrations();
