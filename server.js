const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;

// Start server
const app = express();

// use middleware(s)
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(morgan("dev"));

// Routers
app.get("/users", (req, res) => {
  return res.send("All users");
});

app.get("/products", (req, res) => {
  return res.send("Products");
});

// Start the app
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
