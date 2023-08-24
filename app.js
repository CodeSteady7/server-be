require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");
const methodOverride = require("method-override");
const flash = require('connect-flash');

// route API mobile 
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const fromRouter = require("./routes/form");
const logicRouter = require("./routes/logic");

// route app website 
const dashboardRouter = require("./app/dashboard/router");
const dataRouter = require("./app/data/router");
const reportRouter = require("./app/report/router");
const chartsRouter = require("./app/charts/router");
const authRouter = require("./app/auth/router");
const historyRouter = require("./app/history/router");
const signatureRouter = require("./app/signature/router");
const urgentRouter = require("./app/urgent/router");

//
// const { authUserAdmin } = require("./middleware/auth");

const app = express();

// app.use(
// 	cors({
// 		origin: "*",
// 		credentials: true,
// 	})
// )

const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};

app.use(cors(corsOptions));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  // res.header("Access-Control-Allow-Origin", true)
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(methodOverride("_method"));
app.use(logger("dev"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());
// view engine setup

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "app")));
app.use(express.static(path.join(__dirname, "module-export")));
app.use(express.static(path.join(__dirname, "src")));
app.use(
  "/adminlte",
  express.static(path.join(__dirname, "/node_modules/admin-lte/"))
);

// middleware
app.use("/", authRouter);
app.use("/users", usersRouter);
app.use("/form", fromRouter);
app.use("/logic", logicRouter);

// view engine
app.use("/dashboard", dashboardRouter);
app.use("/data", dataRouter);
app.use("/report", reportRouter);
app.use("/charts", chartsRouter);
app.use("/history", historyRouter);
app.use("/signature", signatureRouter);
app.use("/urgent", urgentRouter);
//

// app.use(authUserAdmin);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
