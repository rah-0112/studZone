const db = require("../db");
const {
  profile,
  academics,
  arrear,
  fee,
  achievements,
  addachievements,
  updateachievements,
} = require("../controllers/student");

const express = require("express");
const StudentRoute = express.Router();

StudentRoute.post("/profile", profile);

StudentRoute.post("/academics", academics);

StudentRoute.post("/arrear", arrear); // check

StudentRoute.post("/fee", fee);

StudentRoute.post("/achievements", achievements);

StudentRoute.post("/addachievements", addachievements);

StudentRoute.post("/updateachievements", updateachievements);

module.exports = StudentRoute;
