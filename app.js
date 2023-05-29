console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();
const router = require("./router");

//1Kirish
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2:session

//3:views
app.set("views", "views");
app.set("view engine", "ejs");

//4:Routing
app.use("/", router);

module.exports = app;
