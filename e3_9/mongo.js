const mongoose = require('mongoose')

// Replace with the URL of your own database. Do not store the password on GitLab!
const url = 'mongodb+srv://ollipo:YaoPPktLiuhYGy5S@cluster0.gkabg.mongodb.net/fs_reminders'

mongoose.connect(url)

const Reminder = mongoose.model('Reminder', {
  content: String,
  date: Date
})

Reminder
  .find({})
  .then(result => {
    result.forEach(reminder => {
      console.log(reminder)
    })
    mongoose.connection.close()
  })

const reminder = new Reminder({
  content: '',
  date: 
})

reminder
  .save()
  .then(response => {
    console.log('reminder saved!')
    mongoose.connection.close()
  })
