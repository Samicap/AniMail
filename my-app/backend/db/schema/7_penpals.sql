DROP TABLE IF EXISTS penpals CASCADE;

CREATE TABLE penpals (
  child1_id INTEGER REFERENCES childs(id) ON DELETE CASCADE,
  child2_id INTEGER REFERENCES childs(id) ON DELETE CASCADE,
  parent1_approval BOOLEAN DEFAULT true,
  parent2_approval BOOLEAN DEFAULT true
);