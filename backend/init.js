const db = require('./db')

const init = () => {
    try {
        db.query("create table if not exists rahul (id INTEGER PRIMARY KEY, name VARCHAR(20))");
    } catch (e) {
        console.error(e);
    }
}

module.exports = init;