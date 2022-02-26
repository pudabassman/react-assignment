const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Message = new Schema(
    {
        email: { type: String, required: true },
        text: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('messages', Message)