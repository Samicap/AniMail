const express = require("express");
const router = express();

module.exports = (db) => {
  router.post("/", (req, res) => {
    //console.log("req", req.body);
    const email = req.body.email;
    const password = req.body.password;
    //console.log("email ", email, "--- password ", password);
    if (email === "" || password === "") {
      res.status(401).send("Email or password is empty");
      return;
    }
    // WHERE email = $1;`, [email]
    return db
      .query(
        `SELECT parents.id as parents_id,
              parents.username as parents_username,
              parents.email as parents_email,
              parents.avatar_url as parents_avatar_url,
              parents.password as parents_password,
              childs.id as childs_id,
              childs.username as childs_username,
              childs.avatar_url as childs_avatar_url,
              childs.age as childs_age,
              childs.language_id as childs_language_id,
              childs.location_id as childs_location_id
              FROM parents
              LEFT JOIN parent_childs ON parents.id = parent_childs.parent_id
              LEFT JOIN childs ON parent_childs.child_id = childs.id
               WHERE parents.email = $1;`,
        [email]
      )
      .then((data) => {
        //console.log("data", data.rows[0].parents_password);
        //console.log(data.rows[0].parents_password == password);
        const parent_password = data.rows[0].parents_password;
        if (parent_password == password) {
          const parent = data.rows;
          res.json({ parent });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
