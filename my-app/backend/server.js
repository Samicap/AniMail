// load .env data into process.env
require('dotenv').config();
const cors = require('cors');

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const cookieSession = require('cookie-session')


// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use(cors())
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
const parentsRoutes = require("./routes/parents")

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above
app.use("/api/parents", parentsRoutes(db));


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/api/private", (req, res) => {
  //where did francis get UserId?
  if (req.session.userId) {
    res.json({err:null, data: "This is private! Don't share!"})
  } else {
    res.json({err: "Not authenticated", data: null})
  }
})

app.post("/api/login", (req, res) => {
  res.session.userId = "42";
  res.json({id:42, name: "Potato"})
})

// app.post("/api/logout", (req, res) => {
  //terminalsays delete res.session isn't valid
//   delete res.session.userId = "42";
//   res.send("ok")
// })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
