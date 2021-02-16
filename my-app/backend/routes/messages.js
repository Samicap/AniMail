const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/children/:id", (req, res) => {
    db.query(`SELECT * FROM messages WHERE child_id_to = $1;`, [req.params.id])
      .then(data => {
        console.log('data', data.rows);
        const messages = data.rows;
        res.json({ messages });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
