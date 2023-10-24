const Pool = require("pg").Pool;

const pool = new Pool({
    user: "iansilva2",
    password: "123456",
    host : "200.19.1.18", //fora: 200.19.1.18 dentro: 192.168.20.18
    port: 5432,
    database: "iansilva2"
});

module.exports = pool;