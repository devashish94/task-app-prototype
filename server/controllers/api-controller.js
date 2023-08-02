const db = require('../models/todo-db')

module.exports = {
  allLists: async function (req, res) {
    const sql = 'select task_list from todo'
    const result = await db.query(sql)
    res.json(result[0])
  },
  allTasks: async function (req, res) {
    const list = req.params.list
    const sql = 'select * from todo where task_list = ?'
    
    // const result = await db.query(sql, [list])
    // res.json(result[0])

    // let result
    setTimeout(async () => {
      const result = await db.query(sql, [list])
      res.json(result[0])
    }, 2000);

  }
}
