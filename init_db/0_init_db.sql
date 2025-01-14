CREATE DATABASE pocket_cart_db;
CREATE USER pocket_cart_admin WITH ENCRYPTED PASSWORD 'pocket_cary_password';
GRANT ALL PRIVILEGES ON DATABASE pocket_cart_db TO pocket_cart_admin;
