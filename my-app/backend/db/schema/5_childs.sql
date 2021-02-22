DROP TABLE IF EXISTS childs CASCADE;

CREATE TABLE childs (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  avatar_url text NOT NULL,
  age INTEGER NOT NULL,
  language_id INTEGER REFERENCES languages(id) ON DELETE CASCADE,
  location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE
);

-- //! needs to add badges