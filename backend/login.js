const db = require("./db");
const express = require("express");
const LoginRoute = express.Router();

LoginRoute.post("/student/login", async (req, res) => {
  const { rollno, password } = req.body;
  try {
    const result = await db.query(`select count(*) as count from student natural join person where dob = '${password}' and id = '${rollno}';`);
    console.log(result);
    res.status(200).json(result.rows[ 0 ].count);
  } catch (err) {
    res.json(500, { err: err.message });
  }
  // { rollno, dob } = req.body;
});

LoginRoute.post("/staff/login", async (req, res) => {
  const { userId, password } = req.body;
  try {
    const result = await db.query(`select count(*) as count from staff natural join person where dob = '${password}' and id = '${userId}';`);
    console.log(result);
    res.status(200).json(result.rows[ 0 ].count);
  } catch (err) {
    res.json(500, { err: err });
  }
});

LoginRoute.post("/parent/login", async (req, res) => {
  const { rollno, password } = req.body;
  try {
    const result = await db.query(`select * from student natural join person where id = '${rollno}' and dob = '${password}';`);
    res.status(200).json(result.rows[ 0 ].count);
  } catch (err) {
    res.json(500, { err: err });
  }
});

module.exports = LoginRoute;
