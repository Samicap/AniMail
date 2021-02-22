const express = require("express");
const router = express.Router();

// make a route to pull up all messages
//helper funtion to format into [{}]
//chekc all queries that they are in the right format for the front to receive them

module.exports = (db) => {
  router.get("/children/:id", (req, res) => {
    db.query(
      `SELECT 
          messages.id as message_id,
          messages.message as message,
          messages.is_sent as is_sent,
          messages.is_received as is_received,
          messages.is_read as is_read,
          messages.duration as duration,
          messages.dateTime_sending as dateTime_sending,
          messages.dateTime_delivering as dateTime_delivering,
          messages.dateTime_receiving as dateTime_receiving,
          messages.child_id_to as child_id_to,
          messages.child_id_from as child_id_from,
          messages.animal_id as animal_id,
          t1.id as receiver_id,
          t2.id as sender_id,
          t1.username as receiver_name,
          t2.username as sender_name,
          t1.avatar_url as receiver_avatar,
          t2.avatar_url as sender_avatar,
          t1.age as receiver_age,
          t2.age as sender_age,
          t1.language_id as receiver_language_id,
          t2.language_id as sender_language_id,
          t1.location_id as receiver_location_id,
          t2.location_id as sender_location_id,
          animals.id as animal_id,
          animals.name as animal_name,
          animals.speed as speed,
          animals.description as animal_description,
          animals.avatar_url as animal_avatar,
          t1.location_id as receiver_location_id,
          t2.location_id as sender_location_id,
          t3.name as receiver_location_name,
          t4.name as sender_location_name,
          t1.language_id as receiver_language_id,
          t2.language_id as sender_language_id,
          t5.name as receiver_language_name,
          t6.name as sender_language_name	 
        FROM messages
        LEFT JOIN childs t1 ON messages.child_id_to = t1.id
        LEFT JOIN childs t2 ON messages.child_id_from = t2.id
        LEFT JOIN animals ON messages.animal_id = animals.id
        LEFT JOIN locations t3 ON t1.location_id = t3.id
        LEFT JOIN locations t4 ON t2.location_id = t4.id
        LEFT JOIN languages t5 ON t1.language_id = t5.id
        LEFT JOIN languages t6 ON t2.language_id = t6.id
        WHERE messages.child_id_to = $1;`,
      [req.params.id]
    )
      .then((data) => {
        const messages = data.rows;
        res.json({ messages });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/children/:id", (req, res) => {
    const child_id = req.params.id;
    const child_id_to = req.body.child_id_to;
    const message = req.body.message;
    const animal_id = req.body.animal_id;

    if (child_id_to === "" || message === "" || animal_id === "") {
      res.status(401).send("There are empty fields in the form.");
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
        const message = data.rows;
        res.json({ message });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.put("/children/:id/received-message/:messageId", (req, res) => {
    const messageId = req.params["messageId"];
    const time = req.body["time"];
    const baby = Math.floor(messageId);

    if (!messageId || !time) {
      res.status(401).send("The messageId is empty!");
      return;
    }
    return db
      .query(
        `
        UPDATE messages
        SET 
            is_received = $1,
            dateTime_receiving = $2
        WHERE messages.id = $3
        RETURNING *;
      `,
        [true, time, baby]
      )
      .then((data) => {
        const message = data;
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
        // console.log("data", data.rows);
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
