DROP TABLE IF EXISTS badges CASCADE;

CREATE TABLE badges (
  id SERIAL PRIMARY KEY NOT NULL,
  badge_avatar text NOT NULL,
  badge_description text
);