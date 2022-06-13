// const Pool = require("pg").Pool;
// require("dotenv").config();
// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//         rejectUnauthorized: false,
//     },
// });
// module.exports = pool;


const Pool = require("pg").Pool;
require("dotenv").config();
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'studzone',
    password: '#R@hul0112#',
    port: 5432,
});

module.exports = pool;