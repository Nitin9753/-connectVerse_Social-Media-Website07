const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/connectVerse_development");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to mongodb"));

db.once("open", function () {
  console.log("Connected to database mongoDB");
});

module.exports = db;
