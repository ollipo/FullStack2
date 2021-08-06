/* 

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
 */