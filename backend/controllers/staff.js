const db = require('../db')

const staffProfile = async (req, res) => {
    const { id } = req.body;
    try {
        const check = await db.query(`select * from staff where id = '${id}'`);
        if (check.rowCount !== 0) {
            const result = await db.query(`select * from staff natural join person where id = '${id}'`)
            res.status(200).send(result.rows[ 0 ]);
        } else {
            res.status(400).send({ message: "No such staff found." })
        }
    } catch (err) {
        res.status(500).send({ message: "Something went wrong." });
    }
}

const fetchCourses = async (req, res) => {
    const { id } = req.body;
    try {
        const check = await db.query(`select * from staff where id = '${id}'`);
        if (check.rowCount !== 0) {
            const result = await db.query(`select paper_name from staff natural join paper_detail where id = '${id}'`);
            res.status(200).send(result.rows);
        } else {
            res.status(400).send({ message: "No such staff found." })
        }
    } catch (err) {
        res.status(500).send({ message: "Something went wrong." });
    }
}
const fetchStudentsPerCourse = async (req, res) => {
    const { id, paper_name } = req.body;
    try {
        const check = await db.query(`select * from staff where id = '${id}'`);
        if (check.rowCount !== 0) {
            const result = await db.query(`select distinct(sp.id), per.name from staff natural join paper_detail p inner join s_paper sp on p.sem_no = sp.sem_no and p.d_id = sp.d_id and p.paper_name = sp.paper_name inner join student s on s.id = sp.id inner join person per on s.id = per.id where staff.id = '${id}' and sp.paper_name = '${paper_name}'`)
            res.status(200).send(result.rows);
        } else {
            res.status(400).send({ message: "No such staff found." })
        }
    } catch (err) {
        res.status(500).send({ message: "Something went wrong." });
    }
}
const uploadMarks = async (req, res) => {
    console.log(req.body);
    const { staff_id, paper_name, stu_id, ca1, ca2, ca3, assignment, tutorial, sem_mark, sem_no } = req.body;
    try {
        const check = await db.query(`select * from student where id = '${stu_id}'`);
        if (check.rowCount !== 0) {
            const query = `update s_paper set ca1 = ${ca1}, ca2 = ${ca2}, ca3 = ${ca3}, assignment = ${assignment}, tutorial = ${tutorial}, sem_mark = ${sem_mark} where sem_no = ${sem_no} and paper_name = '${paper_name}' and id = '${stu_id}' and stf_id = '${staff_id}' returning *;`
            const result = await db.query(query);
            res.status(200).send(result.rows[ 0 ]);
        } else {
            res.status(400).send({ message: "No such student found." })
        }
    } catch (err) {
        res.status(500).send({ message: "Something went wrong." });
    }
}
const fetchMarks = async (req, res) => {
    console.log(req.body);
    const { staff_id, paper_name, stu_id, sem_no } = req.body;
    try {
        const check = await db.query(`select * from staff where id = '${staff_id}';`);
        if (check.rowCount !== 0) {
            const query = `select ca1, ca2, ca3, assignment, tutorial, sem_mark from s_paper where sem_no = ${sem_no} and paper_name = '${paper_name}' and id = '${stu_id}' and stf_id = '${staff_id}'`;
            const result = await db.query(query)
            res.status(200).send(result.rows);
        } else {
            res.status(400).send({ message: "No such student found." })
        }
    } catch (err) {
        res.status(500).send({ message: "Something went wrong." });
    }
}

const fetchAcheivement = async (req, res) => {
    const { id } = req.body;
    try {
        const check = await db.query(`select * from staff where id = '${id}'`);
        if (check.rowCount !== 0) {
            const result = await db.query(`select * from staff natural join paper_detail p inner join s_paper sp on p.sem_no = sp.sem_no and p.d_id = sp.d_id and p.paper_name = sp.paper_name inner join achievements a on sp.id = a.id and sp.sem_no = a.sem_no and sp.d_id = a.d_id where stf_id = '${id}'`)
            res.status(200).send(result.rows);
        } else {
            res.status(400).send({ message: "No such staff found." })
        }
    } catch (err) {
        res.status(500).send({ message: "Something went wrong." });
    }
}

const fetchArrear = async (req, res) => {
    const { id } = req.body;
    try {
        const check = await db.query(`select * from staff where id = '${id}'`);
        if (check.rowCount !== 0) {
            const result = await db.query(`select per.name, sp.id, sp.paper_name from staff natural join paper_detail p inner join s_paper sp on p.sem_no = sp.sem_no and p.d_id = sp.d_id and p.paper_name = sp.paper_name inner join arrear_sem a on a.id = sp.id and a.sem_no = sp.sem_no and a.d_id = sp.d_id and a.paper_name = sp.paper_name inner join student s on s.id = sp.id inner join person per on s.id = per.id where sp.stf_id = '${id}';`)
            res.status(200).send(result.rows);
        } else {
            res.status(400).send({ message: "No such staff found." })
        }
    } catch (err) {
        res.status(500).send({ message: "Something went wrong." });
    }
}

module.exports = { staffProfile, uploadMarks, fetchMarks, fetchStudentsPerCourse, fetchAcheivement, fetchArrear, fetchCourses };