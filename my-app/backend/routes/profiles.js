const express = require("express");
const router = express.Router();
//! these are anon functions that we call in server.js!

module.exports = (db) => {
  router.get("/:id", (req, res) => {
    db.query(
      `SELECT parents.id as parents_id, parents.email as parents_email,
              parents.avatar_url as parents_avatar_url, childs.username as childs_username, childs.avatar_url as childs_avatar_url, childs.age as childs_age, childs.language_id as childs_language_id, childs.location_id as childs_location_id
              FROM parents
              LEFT JOIN parent_childs ON parents.id = parent_childs.parent_id
              LEFT JOIN childs ON parent_childs.child_id = childs.id
              WHERE parents.id = $1;`,
      [req.params.id]
    )
      .then((data) => {
        const parents = data.rows;
        res.json({ parents });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });


  router.get("/child/:id", (req, res) => {
    db.query(
      `SELECT childs.username as username, childs.avatar_url as child_avatar, childs.age as age, locations.name as location, languages.name as language 
       FROM childs
       LEFT JOIN locations ON childs.location_id = locations.id
       LEFT JOIN languages ON childs.language_id = languages.id
       WHERE childs.id = $1;`,
      [req.params.id]
    )
      .then((data) => {
        const childs = data.rows;
        res.json({ childs });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
