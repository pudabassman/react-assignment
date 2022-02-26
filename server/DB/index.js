const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/messages', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

module.exports = mongoose.connection