const express = require('express')

const MessageCtrl = require('../controllers/messages')

const router = express.Router()

router.post('/message', MessageCtrl.saveMessage)
router.get('/messages', MessageCtrl.getMessages)
router.get('/getLastMessage', MessageCtrl.getLastMessageDate)

module.exports = router