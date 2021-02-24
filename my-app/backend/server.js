// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const morgan = require("morgan");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  "/styles",
  sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: "expanded",
  })
);
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const loginRoutes = require("./routes/login");
const parentsRoutes = require("./routes/parents");
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
const messagesRoutes = require("./routes/messages");
const profilesRoutes = require("./routes/profiles");
const childrenRoutes = require("./routes/children");
const badgesRoutes = require("./routes/badges");
//! children Route and routes/children.js do nearly the same thing, but profiles routes fetches specific data to populate the child profile in the inbox that has location name.

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
//! This server.js allows the front end to connect to the backend DB query routes
app.use("/api/login", loginRoutes(db));
app.use("/api/profiles/parents", parentsRoutes(db));
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.use("/api/messages", messagesRoutes(db));
app.use("/api/profiles", profilesRoutes(db));
app.use("/api/children", childrenRoutes(db));
app.use("/api/badges", badgesRoutes(db));
//! /api/children is nearly a duplicate of /api/profiles but data fetches is less specific
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
