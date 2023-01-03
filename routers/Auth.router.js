const express = require("express");
const router = express.Router();

// Routers
router.get("/login", (req, res) => {
  return res.send({ data: "Login data" });
});

router.get("/logout", (req, res) => {
  return res.send({ data: "logout" });
});

module.exports = router;
