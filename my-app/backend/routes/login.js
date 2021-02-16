const express = require('express');
const router  = express();

module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log('req', req.body);
    const email = req.body.email;
    const password = req.body.password;
    console.log('email ', email, '--- password ', password);
    if(email === '' || password === '') {
      res.status(401).send('Email or password is empty');
      return;
    }
    return db.query(`SELECT * FROM parents WHERE email = $1;`, [email])
      .then(data => {
        console.log('data', data.rows[0].password);
        if (data.rows[0].password === password) {
          const parent = data.rows;
          res.json({ parent });
        }
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
