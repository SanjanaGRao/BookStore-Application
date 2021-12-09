/* ************************************************************************
 * Execution        : 1. default node       cmd> nodemon server.js
 *
 * Purpose          : entry point for bookstore application
 *
 * @file            : server.js
 * @author          : Sanjana Rao
 * @version         : 1.0
 * @since           : 07-12-2021
 *
 **************************************************************************/
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const routeUsers = require("./app/route/user/user.route");
const routeBooks = require("./app/route/books/book.routes");
const dbConnect = require("./config/dbConnect");
const logger = require("./config/logger");
// const swagger = require('swagger-ui-express');
// const swaggerDoc = require('./swagger.json');
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// parse requests of content-type
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/users", routeUsers);
app.use("/books", routeBooks);
// app.use('/api-docs', swagger.serve, swagger.setup(swaggerDoc));
// app.use('/images', express.static('app/public'));

// defining a simple route
app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to FundooNotes application. Take notes quickly. Organize and keep track of all your notes.",
  });
  logger.info(
    "Welcome to FundooNotes application. Take notes quickly. Organize and keep track of all your notes."
  );
});

// listen for requests
module.exports = app.listen(process.env.PORT, () => {
  console.log("Server is listening on port 5000.");
  logger.info("Server is listening on port 5000.");
  dbConnect;
});
