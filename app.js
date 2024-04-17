var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

// import router
const categoriesRouter = require("./app/api/v1/categories/router");
const imagesRouter = require("./app/api/v1/images/router");
const talentsRouter = require("./app/api/v1/talents/router");
const eventsRouter = require("./app/api/v1/events/router");
const organizersRouter = require("./app/api/v1/organizers/router");
const authRouter = require("./app/api/v1/auth/router");
const orderRouter = require("./app/api/v1/orders/router");
const participantRouter = require("./app/api/v1/participants/router");
const paymentRouter = require("./app/api/v1/payments/router");

// middleware
const notFoundMiddleware = require("./app/middlewares/not-found");
const handlerErrorMiddleware = require("./app/middlewares/handler-error");

// create variable v1
const v1 = "/api/v1";

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to api semina",
  });
});

// use categories router
app.use(`${v1}/cms`, categoriesRouter);
app.use(`${v1}/cms`, imagesRouter);
app.use(`${v1}/cms`, talentsRouter);
app.use(`${v1}/cms`, eventsRouter);
app.use(`${v1}/cms`, organizersRouter);
app.use(`${v1}/cms`, authRouter);
app.use(`${v1}/cms`, orderRouter);
app.use(v1, participantRouter);
app.use(v1, paymentRouter);

// middleware
app.use(notFoundMiddleware);
app.use(handlerErrorMiddleware);

module.exports = app;
