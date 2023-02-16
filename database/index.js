const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/myapp")
  .then(() => console.log("Connected!"))
  .catch((databaseError) => {
    console.log("databaseError", databaseError);
  });
