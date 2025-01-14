CREATE TABLE IF NOT EXISTS migrations (
    migration_id SERIAL PRIMARY KEY,
    migration_name VARCHAR(255) NOT NULL,
    applied_at TIMESTAMP DEFAULT now()
);
