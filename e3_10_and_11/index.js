const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Reminder = require('./models/reminder')


app.use(bodyParser.json())

app.use(cors())

app.use(express.static('build'))

let reminders = [
    {
    "name": "Buy some eggs",
    "timestamp": "2021-11-10T13:00:00.141Z",
    "id": 1
    },
    {
    "name": "Make an omelette",
    "timestamp": "2021-11-11T08:00:00.141Z",
    "id": 2
    },
    {
    "name": "Wash dishes",
    "timestamp": "2021-11-11T09:00:00.000Z",
    "id": 3
    },
    {
    "name": "Buy more eggs",
    "timestamp": "2021-11-11T13:00:00.000Z",
    "id": 4
    }
]

const formatReminder = (reminder) => {
  return {
    name: reminder.name,
    timestamp: reminder.timestamp,
    id: reminder.id
  }
}


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/reminders', (req, res) => {
  Reminder
    .find({}, {__v: 0})
    .then(reminders => {
      response.json(reminders.map(formatReminder))
    })
})

app.get('/api/reminders/:id', (request, response) => {
  Reminder
    .findById(request.params.id)
    .then(reminder => {
      response.json(formatReminder(reminder))
  })
  })

app.delete('/api/reminders/:id', (request, response) => {
const id = Number(request.params.id)
reminders = reminders.filter(reminder => reminder.id !== id)

response.status(204).end()
})

const generateId = () => {
  const id = Math.round(Math.random() * 1000000000)
  return id
}

app.post('/api/reminders', (request, response) => {
  const body = request.body
  const name = reminders.some(x => x.name === body.name)
  
  if(body.name === undefined){
    return response.status(400).json({error: 'name missing'})
  }

  if(body.timestamp === undefined){
    return response.status(400).json({error: 'timestamp missing'})
  }

  if(name){
    return response.status(400).json({error: 'name must be unique'})
  } else {
  const reminder = new Reminder ({
    name: body.name,
    timestamp: body.timestamp,
    id: generateId()
  })

  reminder
    .save()
    .then(savedReminder => {
      response.json(formatNote(savedReminder))
    })
  }
})

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})