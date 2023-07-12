const mongoose = require("mongoose");
const dbName = "iso"
mongoose
  .connect("mongodb://127.0.0.1:27017/" + dbName + " ")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;