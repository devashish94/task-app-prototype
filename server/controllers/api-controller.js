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

    setTimeout(() => {
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
    }, time * 5)

  },
  task: function (req, res) {
    const something = req.params
    const listName = req.params.list
    const listID = req.params.id

    if (!something) {
      return res.json({
        message: 'list name not readable',
        detail: 'check that if list name is accessible'
      })
    }

    task = {
      id: 'task_id',
      list_name: 'list_name',
      title: 'title',
      description: 'description',
      completed: 'completed'
    }

    const sql = `select ??, ??, ??, ??, ?? from task 
      left join task_list on task_list.name = task.list_name
      where task_list.name = ? having task_id = ?
    `

    setTimeout(() => {
      const params = [task.id, task.list_name, task.title, task.description, task.completed, listName, listID]

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

  },
  allTasks: function (req, res) {
    const listName = req.params.list
    console.log(listName)

    if (!listName) {
      return res.json({
        message: 'list name not readable',
        detail: 'check that if list name is accessible'
      })
    }

    task = {
      id: 'task_id',
      list_name: 'list_name',
      title: 'title',
      description: 'description',
      completed: 'completed'
    }

    const sql = `select ??, ??, ??, ??, ?? from task 
      left join task_list on task_list.name = task.list_name
      where task_list.name = ?
    `

    setTimeout(() => {
      const params = [task.id, task.list_name, task.title, task.description, task.completed, listName]

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
