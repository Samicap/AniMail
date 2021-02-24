const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/:id", (req, res) => {
    db.query(`SELECT * FROM childs WHERE id != $1`, [req.params.id])
      .then((data) => {
        // console.log("data", data.rows);
        const childs = data.rows;
        res.json({ childs });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/penpal/:id", (req, res) => {
    const penpalId = Math.floor(req.params.id);
    db.query(
      `
        SELECT 
        messages.child_id_from as child_id_from,
        childs.username as sender_name
        FROM messages
        LEFT JOIN childs on child_id_from = childs.id
        WHERE child_id_to = $1
        GROUP BY messages.child_id_from, childs.username
        HAVING MIN(childs.username) = MAX(childs.username);
      `, [penpalId])
      .then((data) => {
        // console.log("data", data.rows);
        const penpals = data.rows;
        res.json({ penpals });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
