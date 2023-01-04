const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const Routers = require("./routers");

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
app.use(bodyParser.json());

app.use(morgan("dev"));

app.use(Routers);

// Start the app
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
