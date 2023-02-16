const express = require("express");
const router = express.Router();
const {
  first,
  createData,
  updateData,
  deleteData,
} = require("./controller/index");

router.get("/", first);
router.post("/create", createData);
router.post("/update", updateData);
router.post("/delete", deleteData);

module.exports = router;
