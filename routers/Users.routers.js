const express = require("express");
const router = express.Router();
const { getUsers } = require("../models/Users.model");
const { userTypeFormat } = require("../utils/funcrions");

// Routers
router.get("/:userType", async (req, res) => {
  const userType = req.param("userType");

  let data = await getUsers(userTypeFormat(userType));
  return res.send(data.rows);
});

module.exports = router;
