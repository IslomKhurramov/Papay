console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();

//MongoDb chaqirish
const db = require("./server.js").db();
const mongodb = require("mongodb");

//1Kirish
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2:session

//3:views
app.set("views", "views");
app.set("view engine", "ejs");

//4:Routing
module.exports = app;
