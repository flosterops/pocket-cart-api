CREATE TABLE IF NOT EXISTS products_lists (
    list_id INT NOT NULL REFERENCES lists(list_id),
    product_id INT NOT NULL REFERENCES products(product_id),
    created_at TIMESTAMP DEFAULT now(),
    CONSTRAINT product_lists_pk PRIMARY KEY(product_id, list_id)
)
