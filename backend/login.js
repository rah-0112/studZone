const db = require("../db");
const express = require("express");
const LoginRoute = express.Router();

LoginRoute.post("/student/login", async (req, res) => {
  const { rollno, password } = req.body;
  try {
    const result = await db.query(`select * from student natural join person where id = '${rollno}' and dob = '${password}';`);
    if (result.rows.length > 0) {
      res.status(200).json({ message: "Success" });
    } else {
      res.status(400).json({ message: "Invalid" });
    }
  } catch (err) {
    res.json(500, { err: err });
  }
  // { rollno, dob } = req.body;
});

LoginRoute.post("/staff/login", async (req, res) => {
  const { rollno, password } = req.body;
  try {
    const result = await db.query(`select * from staff natural join person where id = '${rollno}' and dob = '${password}';`);
    if (result.rows.length > 0) {
      res.status(200).json({ message: "Success" });
    } else {
      res.status(400).json({ message: "Invalid" });
    }
  } catch (err) {
    res.json(500, { err: err });
  }

  // { tid, dob } = req.body;
});

LoginRoute.post("/parent/login", async (req, res) => {
  const { rollno, password } = req.body;
  try {
    const result = await db.query(`select * from student natural join person where id = '${rollno}' and dob = '${password}';`);
    if (result.rows.length > 0) {
      res.status(200).json({ message: "Success" });
    } else {
      res.status(400).json({ message: "Invalid" });
    }
  } catch (err) {
    res.json(500, { err: err });
  }
});

module.exports = LoginRoute;
