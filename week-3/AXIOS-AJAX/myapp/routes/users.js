const express = require("express");
const router = express.Router();

const users = [
  {
    name: "Han Solo",
    occupation: "Smuggler",
    debt: true,
    weapon: "Blaster Pistol",
    id: 1,
  },
  {
    name: "Luke Skywalker",
    occupation: "Jedi Knight",
    debt: false,
    weapon: "Lightsaber",
    id: 2,
  },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(users);
});

module.exports = router;
