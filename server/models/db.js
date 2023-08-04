const mysql = require('mysql2')
const { task_lists, tasks } = require('./db-data')

let db = undefined

try {
  db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'a',
  }).promise()
} catch (err) {
  console.log('create pool\n', err.message)
}

const db_name = 'todo_db'
const task_list_table = 'task_list'
const task_table = 'task'

function drop_db() {
  const drop_db = 'drop database if exists ??'

  try {
    const result = db.query(drop_db, [db_name])
  } catch (err) {
    console.log('db init\n', err.message)
  }
}

function db_init() {
  const create_db = 'create database if not exists ??'

  try {
    const result = db.query(create_db, [db_name])
  } catch (err) {
    console.log('db init\n', err)
  }
}

function get_db_list() {
  const sql = 'show databases'

  try {
    const result = db.query(sql)
    console.log(result)
  } catch (err) {
    console.log('get_db_list\n', err)
  }
}

function use_todo_db() {
  const sql = 'use ??'

  try {
    const result = db.query(sql, [db_name])
    console.log('done using')
  } catch (err) {
    console.log('use_todo_db\n', err)
  }
}

function create_table_task_lists(listName) {
  const sql = `create table if not exists ??.?? (
    list_id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    pin boolean NOT NULL
  )`

  try {
    const result = db.query(sql, [db_name, task_list_table])
  } catch (err) {
    console.log('create_table_task_lists\n', err)
  }
}

function create_table_tasks(listName) {
  const sql = `create table if not exists ??.?? (
    task_id int PRIMARY KEY AUTO_INCREMENT,
    list_id int,
    title varchar(255) NOT NULL,
    description varchar(255),
    completed boolean NOT NULL,
    FOREIGN KEY (list_id) REFERENCES ?? (list_id)
  )`

  try {
    const result = db.query(sql, [db_name, task_table, task_list_table])
  } catch (err) {
    console.log('create_table_tasks', err)
  }
}

function show_tables() {
  const sql = `show tables`

  try {
    const result = db.query(sql)
    console.log(result[0])
  } catch (err) {
    console.log('show_tables', err)
  }
}

function fill_lists(list) {
  const sql = 'insert into ?? (name, pin) values (?, ?)'

  try {
    const result = db.query(sql, [task_list_table, list.name, list.pin])
  } catch (err) {
    console.log('fill_task_lists', err)
  }
}

function insert_task_lists() {
  for (const list of task_lists) {
    fill_lists(list)
  }
}

function insert_tasks() {
  for (const task of tasks) {
    fill_tasks(task)
  }
}

function fill_tasks(task) {
  const sql = 'insert into ?? (list_id, title, description, completed) values (?, ?, ?, ?)'

  try {
    const result = db.query(sql, [task_table, task.list_id, task.title, task.description, task.completed])
  } catch (err) {
    console.log('fill_tasks', err)
  }
}

function get_task_lists() {
  const sql = 'select * from ?? limit 3'

  try {
    const result = db.query(sql, [task_list_table])
    console.log('[LISTS]', result[0])
  } catch (err) {
    console.log('get_task_lists', err)
  }
}

function get_tasks() {
  const sql = 'select * from ?? limit 3'

  try {
    const result = db.query(sql, [task_table])
    console.log('[TASKS]', result[0])
  } catch (err) {
    console.log('get_tasks', err)
  }
}

drop_db()
db_init()
use_todo_db()
create_table_task_lists()
create_table_tasks()
show_tables()
insert_task_lists()
insert_tasks()
get_task_lists()
get_tasks()

module.exports = db
