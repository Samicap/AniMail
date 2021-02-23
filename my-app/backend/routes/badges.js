const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/child/:id/badges", (req, res) => {
    const childId = Math.floor(req.params.id);
    db.query(
      `
      SELECT badges.badge_avatar, badges.badge_description
      FROM badges
      LEFT JOIN childs_badges ON
      childs_badges.badge_id = badges.id
      WHERE child_id = $1;
      `, [childId])
      .then((data) => {
        const badges = data.rows;
        res.json({ badges });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/child/:id/child_badges", (req, res) => {

    const childId = Math.floor(req.params.id);
    const badgeId = Math.floor(req.body.badgeId);
    console.log("child ID SENT TO DB", req.params.id)
    console.log("badge ID SENT TO DB", req.body.badgeId)


    // //! need to send a back id to DB so it know which one to add to child DB

    if (!childId) {
      res.status(401).send("The messageId is empty!");
      return;
    }
    return db
      .query(
        `
        INSERT INTO childs_badges (badge_id, child_id)
        VALUES ($1, $2)
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