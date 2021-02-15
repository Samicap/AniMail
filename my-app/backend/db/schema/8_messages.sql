DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  message text NOT NULL,
  is_sent BOOLEAN NOT NULL DEFAULT false,
  is_received BOOLEAN NOT NULL DEFAULT false,
  is_read BOOLEAN NOT NULL DEFAULT false,
  duration INTEGER,
  dateTime_sending TIMESTAMP,
  dateTime_delivering TIMESTAMP,
  dateTime_receiving TIMESTAMP,
  child_id_to INTEGER REFERENCES childs(id) ON DELETE CASCADE,
  child_id_from INTEGER REFERENCES childs(id) ON DELETE CASCADE,
  animal_id INTEGER REFERENCES animals(id) ON DELETE CASCADE
);