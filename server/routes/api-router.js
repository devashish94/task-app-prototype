const express = require('express')
const router = express.Router()
const controller = require('../controllers/api-controller')

router
  .get('/lists/all', controller.allLists) 
  .get('/list/:list/', controller.allTasks)

module.exports = router;
