const db = require('../db')

const login = async (req, res) => {
    try {
        const result = await db.query("select * from student;")
        const count = result.rows.length;
        const json = { result: result.rows, count };
        console.log(json.result);
        console.log(json.count);
        res.send(json);
    } catch (err) {
        res.status(500).send({ error: "Something went wrong" });
    }
}

module.exports = login;