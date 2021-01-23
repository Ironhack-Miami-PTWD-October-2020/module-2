const express = require("express");
const router = express.Router();
const axios = require("axios");

/* GET home page. */
router.get("/", function (req, res, next) {
  axios
    .get("https://ih-crud-api.herokuapp.com/characters")
    .then((responseFromAPI) => {
      const characters = responseFromAPI.data;
      res.render("index", { title: "Express", characters });
    });
});

module.exports = router;
