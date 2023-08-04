// const db = require('../models/todo-db')
const db = require('../models/db')

const time = 200

module.exports = {
  allLists: async function (req, res) {
    const sql = 'select task_list from task_list'
    const result = await db.query(sql)
    res.json(result[0])
  },
  allTasks: async function (req, res) {
    const list = req.params.list
    const sql = `select * from task 
      inner join task_list on task_list.list_id = task.list_id
      where task_list.name = ?
    `    
    setTimeout(async () => {
      const result = await db.query(sql, [list])
      res.json(result[0])
    }, time);

  }
}
