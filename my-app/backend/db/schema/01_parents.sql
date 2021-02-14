-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS parents CASCADE;
CREATE TABLE parents (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  avatar_url VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
