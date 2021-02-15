DROP TABLE IF EXISTS animals CASCADE;

CREATE TABLE animals (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  speed INTEGER NOT NULL,
  description text,
  avatar_url text NOT NULL,
  is_air BOOLEAN NOT NULL,
  is_land BOOLEAN NOT NULL,
  is_water BOOLEAN NOT NULL
);