-- Users table seeds here (Example)
INSERT INTO parents (email, avatar_url, password) VALUES ('lily@test.com', 'avatar url', '123');
INSERT INTO parents (email, avatar_url, password) VALUES ('daisy@test.com', 'avatar url', '123');


INSERT INTO childs (username, avatar_url) VALUES ('mario', 'avatar url');
INSERT INTO childs (username, avatar_url) VALUES ('leo', 'avatar url');


INSERT INTO messages (message, child_id_from, child_id_to) VALUES ('Hey Leo!', 1, 2);
INSERT INTO messages (message, child_id_from, child_id_to) VALUES ('Hey Mario! How are you?', 2, 1);
INSERT INTO messages (message, child_id_from, child_id_to) VALUES ('I am doing good. Do you want to play video game later?', 1, 2);
INSERT INTO messages (message, child_id_from, child_id_to) VALUES ('Yeah! Totally down for it.', 2, 1);


