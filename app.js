// Dotenv
const env = process.env.NODE_ENV || "development";
if (env === "development" || env === "test") require("dotenv").config();

// Import Module
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT;
const cors = require("cors");

async function main() {
  try {
    const app = express();

    // Middleware
    app.use(cors());
    app.use(
      express.urlencoded({
        extended: true,
      })
    );
    app.use(express.json());
    app.use(routes);
    app.use(bodyParser.json());
    app.use(errorHandler);

    // Running Server
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  } catch (error) {
    res.status(500).send({
      error: error.message || "Internal Server Error",
    });
  }
}

main();
