const Todo = require('../models/Todo')
const asyncHandler = require('express-async-handler')

// @desc Get all todos
// @route GET /todos
// @access Private
const getAllTodos = asyncHandler(async (req, res) => {
    const todos = await Todo.find().lean()

    if (!todos) {
        return res.status(400).json({ message: 'No Todos Found'})
    }
    res.json(todos)
})

// @desc Create a todo
// @route GET /todos
// @access Private
const createTodo = asyncHandler(async (req, res) => {
    const { text } = req.body

    const todo = await Todo.create({
        text: text
    })
    if (!todo) return res.status(500).json({ message: 'Unable to create Todo, server error'})

    res.json(todo)
})

// @desc Complete a todo
// @route GET /todos/:id/complete
// @access Private
const completeTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id).exec()

    if (!todo) return res.status(400).json({ message: `Unable to find existing todo with id ${req.params.id}`})

    todo.complete = !todo.complete

    const updatedTodo = await todo.save()
    if (!updatedTodo) return res.status(500).json({ message: 'Unable to save completed todo'})

    res.json(todo)
})

// @desc Edit a todo
// @route GET /todos/:id/edit
// @access Private
const editTodo = asyncHandler(async (req, res) => {
    const { text } = req.body

    const todo = await Todo.findById(req.params.id).exec()
    if (!todo) return res.status(500).json({ message: `Unable to find todo with id ${req.params.id}`})

    todo.text = text
    const result = await todo.save()

    res.json(result)
})


// @desc Delete a todo
// @route GET /todos/:id
// @access Private
const deleteTodo = asyncHandler(async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id)

    if (!result) return res.status(500).json({ message: `Unable to delete Todo with id ${req.params.id}`})

    res.json(result)
})

module.exports = {
    getAllTodos,
    createTodo,
    completeTodo,
    editTodo,
    deleteTodo
}