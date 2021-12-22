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
const routeCart = require("./app/route/cart/cart.route");
const routeCustomer = require("./app/route/customerDetails/customer.routes");
const routeOrder = require('./app/route/order/order.route');
const dbConnect = require("./config/dbConnect");
const logger = require("./config/logger");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL ,
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// parse requests of content-type
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/users", routeUsers);
app.use("/books", routeBooks);
app.use("/cart", routeCart);
app.use("/customer", routeCustomer);
app.use("/order", routeOrder);

// listen for requests
module.exports = app.listen(process.env.PORT, () => {
  console.log("Server is listening on port 5000.");
  logger.info("Server is listening on port 5000.");
  dbConnect;
});
