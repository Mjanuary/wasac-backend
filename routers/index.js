const express = require("express");
const router = express.Router();

const UsersRouter = require("./Users.routers");
const AuthRouter = require("./Auth.router");

router.use("/users", UsersRouter);
router.use("/auth", AuthRouter);

module.exports = router;
