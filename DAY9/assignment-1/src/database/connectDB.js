const mysql = require("mysql2/promise")

const connection = async () => {

    const connect = await mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    })

    return connect
}

module.exports = {
    connection
}