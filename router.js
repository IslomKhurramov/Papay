const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("home sahifasidasz");
});

router.get("/menu", (req, res) => {
  res.send("Menu sahifasidasz");
});

router.get("/community", (req, res) => {
  res.send("Jamiyat sahifasidasz");
});

module.exports = router;
