const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  checkUserExist,
} = require("../models/Users.model");
const { userTypeFormat } = require("../utils/funcrions");
const { check, validationResult } = require("express-validator");
const { v4: uuidv4 } = require("uuid");

// Routers
router.get("/:userType", async (req, res) => {
  const userType = req.param("userType");

  let data = await getUsers(userTypeFormat(userType));
  return res.send(data.rows);
});

router.post(
  "/",
  [check("first_name", "Please provide a first_name").not().isEmpty()],
  [check("last_name", "Please provide a last_name").not().isEmpty()],
  [check("email", "Please provide a email").isEmail()],
  [check("nid", "Please provide a nid").not().isEmpty()],
  [check("user_type_id", "Please provide a user_type_id").not().isEmpty()],
  [check("password", "Please provide a password").not().isEmpty()],
  [check("phone", "Please provide a phone").not().isEmpty()],

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const user = await checkUserExist(
      req.body.nid,
      req.body.email,
      req.body.phone
    );

    if (user.rowCount >= 1) {
      return res.status(400).json({
        errors: ["User already exist"],
      });
    }

    const userId = uuidv4();

    let data = await createUser({ ...req.body, userId });
    if (data.rowCount <= 0) {
      return res.status(400).json({
        errors: ["Failed to create user"],
      });
    }

    return res.send({
      message: "User created successfully",
      user: { ...req.body, id: userId },
    });
  }
);

module.exports = router;
