require("dotenv").config();

const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const app = express(); // ---------------------
//                                            |
// require database configuration             |
require("./configs/db.config"); //            |
//                                            |
app.use(cookieParser());
require("./configs/session.config")(app); // <-

// to create a "global" variable userInSession to be used in any view wherever we need it
const bindUserToLocals = require("./configs/user-locals.config");
app.use(bindUserToLocals);

// Middleware Setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Express View engine setup

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";
app.locals.bootcamp = "web dev miami pt 10/2020";
// const index = require('./routes/index');
// app.use('/', index);
//      |  |  |
//      V  V  V
app.use("/", require("./routes/index.routes"));
app.use("/", require("./routes/auth.routes"));
app.use("/", require("./routes/example.routes"));

module.exports = app;
