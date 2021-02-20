const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/:id", (req, res) => {
    db.query(`SELECT * FROM childs WHERE id != $1`, [req.params.id])
      .then((data) => {
        console.log("data", data.rows);
        const childs = data.rows;
        res.json({ childs });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
