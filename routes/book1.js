const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {
  db.any('SELECT * FROM "membership";')
    .then((rows) => {
      console.log(rows);
      res.json(rows);
    })

    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
