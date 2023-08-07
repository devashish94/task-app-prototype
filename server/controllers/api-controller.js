const db = require('../models/db')

const time = 200

module.exports = {
  allLists: function (req, res) {
    list = {
      name: 'name',
      pin: 'pin'
    }

    const sql = 'select ??, ?? from task_list'
    const values = [list.name, list.pin]

    console.log(
      db.query(sql, values, (err, result) => {
        if (err) {
          return res.json({
            error: err.message
          })
        }
        return res.json(result)
      }).sql
    )
  },
  allTasks: function (req, res) {
    const listName = req.params.list

    if (!listName) {
      return res.json({
        message: 'list name not readable',
        detail: 'check that if list name is accessible'
      })
    }

    task = {
      id: 'task_id',
      title: 'title',
      description: 'description',
      completed: 'completed'
    }

    const sql = `select ??, ??, ??, ?? from task 
      left join task_list on task_list.name = task.list_name
      where task_list.name = ?
    `

    setTimeout(() => {
      const params = [task.id, task.title, task.description, task.completed, listName]

      console.log(
        db.query(sql, params, (err, result) => {
          if (err) {
            return res.json({
              error: err.message
            })
          }
          return res.json(result)
        }).sql
      )
    }, time);

  }
}
