const express = require("express");
const router = express.Router();
// import mongoose when dealing with errors in .catch()
const mongoose = require("mongoose");

// import bcryptjs - needed for proper password handling
const bcryptjs = require("bcryptjs");

// import the model
const User = require("../models/User.model");

const saltRounds = 10;

// GET the signup form so users can input their information
router.get("/auth/signup", (req, res, next) => {
  res.render("auth/signup.hbs");
});

// POST route to save the user inside the database
router.post("/signup", (req, res, next) => {
  //   console.log(req.body);

  const { username, email, userPassword } = req.body;

  if (!username || !email || !userPassword) {
    res.render("auth/signup.hbs", {
      errorMessage: "All fields are mandatory. Please provide username, email and password."
    });
    return;
  }

  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(userPassword)) {
    res.render("auth/signup.hbs", {
      errorMessage:
        "Password needs to be at least 6 characters long, and needs to have at least one number, one lowercase and one uppercase letter."
    });
    return;
  }

  bcryptjs
    .genSalt(saltRounds)
    .then((salt) => bcryptjs.hash(userPassword, salt))
    .then((hashedPassword) => {
      return User.create({
        username,
        email,
        // passwordHash is the key from User model and hashedPassword is a placeholder (this is how we named the returning value from the .hash() method)
        passwordHash: hashedPassword
      }).then((userFromDB) => console.log(userFromDB));
    })
    .catch((err) => {
      if (err.code === 11000) {
        res.render("auth/signup.hbs", {
          errorMessage: "Username and email need to be unique. Either username or email is already used."
        });
      } else if (err instanceof mongoose.Error.ValidationError) {
        res.render("auth/signup.hbs", { errorMessage: err.message });
      } else {
        console.log("Error while creating a user: ", err);
      }
    });
});

module.exports = router;
