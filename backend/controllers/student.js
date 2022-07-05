const db = require("../db");

const profile = async (req, res, next) => {
  const rollno = req.body.rollno;
  try {
    const processingQuery = `select * from student natural join person where student.id = \'${rollno}\'`;
    const data = await db.query(processingQuery);
    res.send({ hit: "true", data: data.rows });
  } catch (e) {
    res.send({ error: e });
  }
};

const academics = async (req, res, next) => {
  const rollno = req.body.rollno;
  const sem_no = req.body.sem_no;
  try {
    const processingQuery = `select * from academics natural join s_paper where id=\'${rollno}\' and sem_no=${sem_no}`;
    const data = await db.query(processingQuery);
    res.send({ hit: "true", data: data });
  } catch (e) {
    res.send({ error: e });
  }
};

const arrear = async (req, res, next) => {
  const rollno = req.body.rollno;
  try {
    const processingQuery = `select * from academics natural join s_paper natural join arrear_sem where id=\'${rollno}\'`;
    const data = await db.query(processingQuery);
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
    res.send({ hit: "true", data: data.rows });
  } catch (e) {
    res.send({ error: e });
  }
};

const achievements = async (req, res, next) => {
  const rollno = req.body.rollno;
  try {
    const processingQuery = `select * from achievements where id=\'${rollno}\'`;
    const data = await db.query(processingQuery);
    res.send({ hit: "true", data: data.rows });
  } catch (e) {
    res.send({ error: e });
  }
};

const addachievements = async (req, res, next) => {
  const rollno = req.body.rollno;
  const name = req.body.name;
  try {
    var processingQuery = `select * from student natural join academics where id=\'${rollno}\'`;
    var data = await db.query(processingQuery);
    var processingQuery = `insert into achievements(name, id,date, d_id, img_link) values(\'${name}\',\'${rollno}\',\'${req.body.date}\', \'${data.rows[ 0 ].d_id}\', \'${req.body.img_link}\') `;
    await db.query(processingQuery);
    processingQuery = `select * from achievements where id=\'${rollno}\'`;
    data = await db.query(processingQuery);
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
    const data = await db.query(processingQuery);
    res.send({ hit: "true", data: data });
  } catch (e) {
    res.send({ error: e });
  }
};

const parentDetails = async (req, res, next) => {
  const rollno = req.body.rollno;
  try {
    const processingQuery = `select email_id, name, relationship, string_agg(mobile, ', ') as mobiles from parent natural join parent_mobiles group by (email_id, name, relationship, id) having id = '${rollno}';`;
    const data = await db.query(processingQuery);
    res.send(data.rows);
  } catch (e) {
    res.send({ error: e });
  }
};

const addMessages = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phoneno = req.body.phoneno;
  const replytype = req.body.replytype;
  const message = req.body.message;
  try {
    const processingQuery = `insert into messages values('${name}', '${email}', '${phoneno}' ,'${replytype}', '${message}')`;
    const data = await db.query(processingQuery);
    res.send(data.rows);
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
  parentDetails: parentDetails,
  addMessages: addMessages,
};
