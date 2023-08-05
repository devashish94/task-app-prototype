const mysql = require('mysql2')
const { task_lists, tasks } = require('./db-data')

const db_name = 'todo_db'
const task_list_table = 'task_list'
const task_table = 'task'

function drop_db(db) {
  const drop_db = 'drop database if exists ??'

  try {
    db.query(drop_db, [db_name])
  } catch (err) {
    console.log('db init\n', err)
  }
}

function db_init(db) {
  const create_db = 'create database if not exists ??'

  try {
    db.query(create_db, [db_name])
  } catch (err) {
    console.log('db init\n', err)
  }
}

function get_db_list(db) {
  const sql = 'SELECT DATABASE() from dual'
  db.query(sql, (err, result) => {
    if (err) {
      throw new err
    }
    console.log(result)
  })
}

function current_db(db) {
  const sql = 'show databases'

  try {
    db.query(sql, (err, result) => {
      if (err) {
        throw new err
      }
      console.log('current:', result)
    })
  } catch (err) {
    console.log('current_db', err)
  }
}

function use_todo_db(db) {
  const sql = 'use ??'

  try {
    db.query(sql, [db_name])
    console.log('done using')
  } catch (err) {
    console.log('use_todo_db\n', err)
  }
}

function create_table_task_lists(db, listName) {
  const sql = `create table ??.?? (
    list_id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(255) NOT NULL UNIQUE,
    pin boolean NOT NULL
  )`

  try {
    db.query(sql, [db_name, task_list_table])
  } catch (err) {
    console.log('create_table_task_lists\n', err)
  }
}

function create_table_tasks(db, listName) {
  const sql = `create table ??.?? (
    task_id int PRIMARY KEY AUTO_INCREMENT,
    list_name varchar(255),
    title varchar(255) NOT NULL,
    description varchar(255),
    completed boolean NOT NULL,
    FOREIGN KEY (list_name) REFERENCES ?? (name)
  )`

  try {
    db.query(sql, [db_name, task_table, task_list_table])
  } catch (err) {
    console.log('create_table_tasks', err)
  }
}

function show_tables(db) {
  const sql = `show tables`

  try {
    db.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result)
    })
  } catch (err) {
    console.log('show_tables', err)
  }
}

function fill_lists(db, list) {
  const sql = 'insert into ?? (name, pin) values (?, ?)'

  try {
    db.query(sql, [task_list_table, list.name, list.pin])
  } catch (err) {
    console.log('fill_task_lists', err)
  }
}

function insert_task_lists(db) {
  for (const list of task_lists) {
    fill_lists(db, list)
  }
}

function insert_tasks(db) {
  for (const task of tasks) {
    fill_tasks(db, task)
  }
}

function fill_tasks(db, task) {
  const sql = 'insert into ?? (list_name, title, description, completed) values (?, ?, ?, ?)'

  try {
    db.query(sql, [task_table, task.list_name, task.title, task.description, task.completed])
  } catch (err) {
    console.log('fill_tasks', err)
  }
}

function get_task_lists(db) {
  const sql = 'select * from ??'

  try {
    const result = db.query(sql, [task_list_table], (err, result) => {
      if (err) {
        throw err;
      }
      console.log('[LISTS]', result)
    })
  } catch (err) {
    console.log('get_task_lists', err)
  }
}

function get_tasks(db) {
  const sql = 'select * from ??'

  try {
    const result = db.query(sql, [task_table], (err, result) => {
      if (err) {
        throw err;
      }
      console.log('[TASKS]', result)
    })
  } catch (err) {
    console.log('get_tasks', err)
  }
}

function delete_table(db, name) {
  const sql = 'drop table if exists ??'
  db.query(sql, [name])
}

const config = {
  host: 'localhost',
  user: 'root',
  password: 'a',
}

function check() {
  try {
    const db = mysql.createConnection(config)
    drop_db(db)
    db_init(db)
  } catch (err) {
    console.log('Database server is down\n', err.message)
    return
  }
}

check()

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'a',
  database: db_name
})

current_db(db)
delete_table(db, task_list_table)
delete_table(db, task_table)
create_table_task_lists(db)
create_table_tasks(db)
show_tables(db)
insert_task_lists(db)
insert_tasks(db)
get_task_lists(db)
get_tasks(db)

module.exports = db
