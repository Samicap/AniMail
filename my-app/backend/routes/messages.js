const express = require("express");
const router = express.Router();

// make a route to pull up all messages
//helper funtion to format into [{}]
//chekc all queries that they are in the right format for the front to receive them

module.exports = (db) => {
  router.get("/children/:id", (req, res) => {
    db.query(
      `SELECT * FROM messages
            LEFT JOIN animals
            ON messages.animal_id = animals.id
            WHERE messages.child_id_to = $1;`,
      [req.params.id]
    )
      .then((data) => {
        console.log("data", data.rows);
        const messages = data.rows;
        res.json({ messages });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/children/:id", (req, res) => {
    //const time_sent = Date.now();
    //console.log("req.params ", req.body);
    const child_id = req.params.id;
    const child_id_to = req.body.child_id_to;
    const message = req.body.message;
    const animal_id = req.body.animal_id;

    console.log("child_id_to ", child_id_to);
    console.log("message ", message);
    console.log("animal_id ", animal_id);
    //console.log("time_sent ", time_sent);
    console.log("child_id ", child_id);

    if (child_id_to === "" || message === "" || animal_id === "") {
      res.status(400).send("There are empty fields in the form.");
      return;
    }
    return db
      .query(
        `
        INSERT INTO messages (message, is_sent, child_id_to, child_id_from, animal_id, dateTime_sending)
        VALUES ($1, $2, $3, $4, $5, NOW())
        RETURNING *;
      `,
        [message, true, child_id_to, child_id, animal_id]
      )
      .then((data) => {
        console.log("data", data.rows);
        const message = data.rows;
        res.json({ message });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/:messageId/children/:childId", (req, res) => {
    console.log("req.params", req.params);
    db.query(`SELECT * FROM messages WHERE id = $1;`, [req.params.messageId])
      .then((data) => {
        console.log("data", data.rows);
        const message = data.rows;
        res.json({ message });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.delete("/:messageId/children/:childId", (req, res) => {
    console.log("req.params", req.params);
    db.query(`DELETE FROM messages WHERE id = $1`, [req.params.messageId])
      .then((data) => {
        res.status(200).json({
          message: "Message deleted successfuly!",
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
