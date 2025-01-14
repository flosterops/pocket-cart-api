const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
require('dotenv').config();

async function initDb() {
    console.log(process.env.POSTGRES_DB, 'process.env.POSTGRES_DB');
    const client = new Client({
        user: process.env.POSTGRES_ADMIN,
        host: process.env.POSTGRES_HOST,
        password: process.env.POSTGRES_ADMIN_PASSWORD,
        port: process.env.POSTGRES_PORT,
    });

    try {
        await client.connect();

        const migrationsDir = path.join(__dirname, 'init_db');
        const files = fs.readdirSync(migrationsDir).sort();
        await client.query('CREATE DATABASE pocket_cart_db;');
        await client.query("CREATE USER pocket_cart_admin WITH ENCRYPTED PASSWORD 'pocket_cary_password'");
        await client.query('GRANT ALL PRIVILEGES ON DATABASE pocket_cart_db TO pocket_cart_admin;');

        console.log('Initialized');
    } catch (error) {
        console.error('Error running migrations:', error);
    } finally {
        await client.end();
    }
}

initDb().then(() => {
    console.log('DB successfully initialized');
});
