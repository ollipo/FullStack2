const mongoose = require('mongoose')

const url = 'mongodb+srv://ollipo:YaoPPktLiuhYGy5S@cluster0.gkabg.mongodb.net/fs_reminders'

mongoose.connect(url)

const Reminder = mongoose.model('Reminder', {
  name: String,
  timestamp: Date,
  id: Number
})

module.exports = Reminder