const Message = require('../DB/models/message')
const dayjs = require('dayjs')

const errorHandler = ({error, messages = [], res}) => {
  let result

  if(error) {
    result = res.status(400).json({ success: false, error: err })
  }
  if (!messages.length) {
    result = res
        .status(404)
        .json({ success: false, error: `No messages found` })
  }

  return result
}

module.exports = {
  saveMessage: (req, res) => {
    const body = req.body
    if (!body) {
      return res.status(400).json({
          success: false,
          error: 'You must provide an email and message',
      })
    }

    const message = new Message(body)

    message
      .save()
      .then(() => {
        return res.status(201)
          .json(message)
      })
      .catch(error => {
        return res.status(400).json({
            error,
            message: 'Message not created!',
        })
      })      
  },

  getMessages: async (req, res) => {
    let result;
    try{
      const messages = await Message.find({}).sort({ createdAt:-1 })
      result = res.status(200).json({ messages })
    }
    catch(error){
      result = errorHandler({error, res})
    }
    return result
  },

  getLastMessageDate: async ({query: { email }}, res) => { 
    let result;
    try{
      const [{createdAt}] = await Message
        .find({ email })
        .sort({ createdAt: -1 })
        .select({'createdAt': 1, '_id': 0})
        .limit(1)
      if(createdAt)
        result = res.status(200).json(dayjs(createdAt).format('DD/MM/YYYY HH:mm:ss'))
      else
        result = errorHandler({res})
    }
    catch(error){
      result = errorHandler({error, res})
    }
    return result
  }
}