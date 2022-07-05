const express = require("express");
const StudentRoute = express.Router();
const db = require("../db");
const {
  profile,
  academics,
  arrear,
  fee,
  achievements,
  addachievements,
  updateachievements,
  parentDetails,
  addMessages,
} = require("../controllers/student");


StudentRoute.post("/profile", profile);
StudentRoute.post("/academics", academics);
StudentRoute.post("/arrear", arrear); // check
StudentRoute.post("/fee", fee);
StudentRoute.post("/achievements", achievements);
StudentRoute.post("/addachievements", addachievements);
StudentRoute.post("/updateachievements", updateachievements);
StudentRoute.post("/parentDetails", parentDetails);
StudentRoute.post("/addMessage", addMessages);

module.exports = StudentRoute;
