const db = require("../db");

const profile = async (req, res, next) => {
  const rollno = req.body.rollno;
  //console.log(rollno);
  try {
    const processingQuery = `select * from student natural join person where student.id = \'${rollno}\'`;
    // const processingQuery = `select * from student`;
    //console.log(processingQuery);
    const data = await db.query(processingQuery);
    // //console.log(data);
    res.send({ hit: "true", data: data });
  } catch (e) {
    res.send({ error: e });
  }
};

const academics = async (req, res, next) => {
  const rollno = req.body.rollno;
  const sem_no = req.body.sem_no;
  //   console.log(rollno + " " + sem_no);
  try {
    const processingQuery = `select * from academics natural join s_paper where id=\'${rollno}\' and sem_no=${sem_no}`;
    const data = await db.query(processingQuery);
    // //console.log(data);
    res.send({ hit: "true", data: data });
  } catch (e) {
    res.send({ error: e });
  }
};

const arrear = async (req, res, next) => {
  const rollno = req.body.rollno;
  try {
    const processingQuery = `select * from academics natural join s_paper natural join arrear_sem where id=\'${rollno}\'`;
    // //console.log(processingQuery);
    const data = await db.query(processingQuery);
    // //console.log(data);
    res.send({ hit: "true", data: data });
  } catch (e) {
    res.send({ error: e });
  }
};

const fee = async (req, res, next) => {
  const rollno = req.body.rollno;
  try {
    const processingQuery = `select * from academics natural join student natural join fee where id=\'${rollno}\'`;
    const data = await db.query(processingQuery);
    // //console.log(data);
    res.send({ hit: "true", data: data });
  } catch (e) {
    res.send({ error: e });
  }
};

//yet to check
const achievements = async (req, res, next) => {
  const rollno = req.body.rollno;
  //   //console.log(rollno);
  try {
    const processingQuery = `select * from achievements where id=\'${rollno}\'`;
    // //console.log(processingQuery);
    const data = await db.query(processingQuery);
    // //console.log(data);
    res.send({ hit: "true", data: data });
  } catch (e) {
    res.send({ error: e });
  }
};

//yet to update
const addachievements = async (req, res, next) => {
  const rollno = req.body.rollno;
  const name = req.body.name;
  console.log(rollno + " " + name);
  try {
    var processingQuery = `select * from student natural join academics where id=\'${rollno}\'`;
    // console.log(processingQuery);
    var data = await db.query(processingQuery);
    //console.log(data.rows);

    processingQuery = `insert into achievements(name, id,date, sem_no, d_id, img_link) values(\'${name}\',\'${rollno}\',\'${req.body.date}\',${req.body.sem_no}, \'${data.rows[ 0 ].d_id}\', \'${req.body.img_link}\') `;
    // console.log(processingQuery);

    await db.query(processingQuery);

    processingQuery = `select * from achievements where id=\'${rollno}\'`;
    console.log(processingQuery);
    data = await db.query(processingQuery);

    // console.log("sent")
    res.send({ hit: "true", data: data });
  } catch (e) {
    res.send({ error: e });
  }
};
const updateachievements = async (req, res, next) => {
  const rollno = req.body.rollno;
  const img_link = req.body.img_link;
  const name = req.body.name;
  const ach_id = req.body.ach_id;
  try {
    var processingQuery = `update achievements set img_link = \'${img_link}\', name = \'${name}\' where ach_id=${ach_id}`;
    console.log(processingQuery);
    const data = await db.query(processingQuery);
    // console.log(data);
    res.send({ hit: "true", data: data });
  } catch (e) {
    res.send({ error: e });
  }
};

module.exports = {
  profile: profile,
  academics: academics,
  arrear: arrear,
  fee: fee,
  achievements: achievements,
  addachievements: addachievements,
  updateachievements: updateachievements,
};
