const mongoose = require('mongoose')
const { schemaOptions } = require('./modelOptions')

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    }
}, schemaOptions)

module.exports = mongoose.model('Todo', todoSchema)