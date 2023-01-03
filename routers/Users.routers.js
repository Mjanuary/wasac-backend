const express = require("express");
const router = express.Router();

// Routers
router.get("/users", (req, res) => {
  return res.send([
    {
      id: 1,
      name: "Alice",
    },
    {
      id: 2,
      name: "John",
    },
  ]);
});

router.get("/admins", (req, res) => {
  return res.send([
    {
      id: 1,
      name: "James",
    },
    {
      id: 2,
      name: "kevin",
    },
  ]);
});

module.exports = router;
