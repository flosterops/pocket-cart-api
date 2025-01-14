CREATE TABLE IF NOT EXISTS products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT now()
)
