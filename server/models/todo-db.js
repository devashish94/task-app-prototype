const mysql = require('mysql2/promise')
const { task_lists, tasks } = require('./task_list_data')

let db = undefined

try {
  db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'a',
  })
} catch (err) {
  console.log('create pool\n', err.message)
}

const db_name = 'todo_db'
const task_list_table = 'task_list'
const task_table = 'task'

async function drop_db() {
  const drop_db = 'drop database if exists ??'

  try {
    const result = await db.query(drop_db, [db_name])
  } catch (err) {
    console.log('db init\n', err.message)
  }
}

async function db_init() {
  const create_db = 'create database if not exists ??'

  try {
    const result = await db.query(create_db, [db_name])
  } catch (err) {
    console.log('db init\n', err)
  }
}

async function get_db_list() {
  const sql = 'show databases'

  try {
    const result = await db.query(sql)
    console.log(result)
  } catch (err) {
    console.log('get_db_list\n', err)
  }
}

async function use_todo_db() {
  const sql = 'use ??'

  try {
    const result = await db.query(sql, [db_name])
    console.log('done using')
  } catch (err) {
    console.log('use_todo_db\n', err)
  }
}

async function create_table_task_lists(listName) {
  const sql = `create table if not exists ??.?? (
    list_id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    pin boolean NOT NULL
  )`

  try {
    const result = await db.query(sql, [db_name, task_list_table])
  } catch (err) {
    console.log('create_table_task_lists\n', err)
  }
}

async function create_table_tasks(listName) {
  const sql = `create table if not exists ??.?? (
    task_id int PRIMARY KEY AUTO_INCREMENT,
    list_id int,
    title varchar(255) NOT NULL,
    description varchar(255),
    completed boolean NOT NULL,
    FOREIGN KEY (list_id) REFERENCES ?? (list_id)
  )`

  try {
    const result = await db.query(sql, [db_name, task_table, task_list_table])
  } catch (err) {
    console.log('create_table_tasks', err)
  }
}

async function show_tables() {
  const sql = `show tables`

  try {
    const result = await db.query(sql)
    console.log(result[0])
  } catch (err) {
    console.log('show_tables', err)
  }
}

async function fill_lists(list) {
  const sql = 'insert into ?? (name, pin) values (?, ?)'

  try {
    const result = await db.query(sql, [task_list_table, list.name, list.pin])
  } catch (err) {
    console.log('fill_task_lists', err)
  }
}

async function insert_task_lists() {
  for await (const list of task_lists) {
    await fill_lists(list)
  }
}

async function fill_tasks(task) {
  const sql = 'insert into ?? (list_id, title, description, completed) values (?, ?, ?, ?)'

  try {
    const result = await db.query(sql, [task_table, task.list_id, task.title, task.description, task.completed])
  } catch (err) {
    console.log('fill_tasks', err)
  }
}

async function insert_tasks() {
  for await (const task of tasks) {
    await fill_tasks(task)
  }
}

async function get_task_lists() {
  const sql = 'select * from ?? limit 3'

  try {
    const result = await db.query(sql, [task_list_table])
    console.log('[LISTS]', result[0])
  } catch (err) {
    console.log('get_task_lists', err) 
  }
}

async function get_tasks() {
  const sql = 'select * from ?? limit 3'

  try {
    const result = await db.query(sql, [task_table])
    console.log('[TASKS]', result[0])
  } catch (err) {
    console.log('get_tasks', err) 
  }
}

async function main() {
  await drop_db()
  await db_init()
  await use_todo_db()
  await create_table_task_lists()
  await create_table_tasks()
  await show_tables()
  await insert_task_lists()
  await insert_tasks()
  await get_task_lists()
  await get_tasks()
}

main()

module.exports = db
