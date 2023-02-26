const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')

router.route('/')
    .get(todoController.getAllTodos)
    .post(todoController.createTodo)

router.route('/:id')
    .delete(todoController.deleteTodo)

router.route('/:id/complete')
    .patch(todoController.completeTodo)

router.route('/:id/edit')
    .patch(todoController.editTodo)

module.exports = router