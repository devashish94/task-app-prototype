const mysql = require('mysql2/promise')

module.exports = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'a',
  database: 'todo_db'
})
