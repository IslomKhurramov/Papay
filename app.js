console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();
const router = require("./router.js");
const router_bssr = require("./router_bssr.js");

let session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const store = new MongoDBStore({
  uri: process.env.MONGO_URL,
  collection: "sessions",
});

//1Kirish
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2:session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 30, //30minutes
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(function (req, res, next) {
  res.locals.member = req.session.member;
  next();
});

//3:views
app.set("views", "views");
app.set("view engine", "ejs");

//4:Routing
app.use("/", router); //react un
app.use("/resto", router_bssr); //ananaviy

module.exports = app;
