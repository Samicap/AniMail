const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("child/:id/badges", (req, res) => {
    db.query(`SELECT * FROM badges WHERE id != $1`, [req.params.id])
      .then((data) => {
        // console.log("data", data.rows);
        const badges = data.rows;
        res.json({ badges });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.put("/child/:id/badges", (req, res) => {
    const childId = req.params["childId"];
    //! need to send a back id to DB so it know which one to add to child DB
    const badgeId = req.body["badge"]
    // const time = req.body["time"];
    // const baby = Math.floor(messageId);

    if (!childId) {
      res.status(401).send("The messageId is empty!");
      return;
    }
    return db
      .query(
        `
        UPDATE childs
        SET 
            badges_received = $1,
        WHERE childs.id = $2
        RETURNING *;
      `,
        [badgeId, childId]
      )
      .then((data) => {
        const message = data;
        res.json({ message });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });


  return router;
};