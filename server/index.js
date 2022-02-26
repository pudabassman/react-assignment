const app = require('express')()
var cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./DB')
const routes = require('./routes/messages')
const apiPort = 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))