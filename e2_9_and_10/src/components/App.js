import React from 'react';
import Reminder from './Reminder';
import Form from './Form';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        reminders: [],
        newName: '',
        newDate: ''
    }
  }

  componentDidMount() {
    axios
      .get('/api/reminders')
      .then(response => {
        this.setState({ reminders: response.data })
      })
  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleDateChange = (event) => {
    console.log(event.target.value)
    this.setState({ newDate: event.target.value })
  }

  addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: this.state.newName,
      timestamp: new Date(this.state.newDate).toLocaleString(),
      // important: Math.random() > 0.5,
      // id: this.state.reminders.length + 1
    }
  
    if(!this.state.reminders.some(reminder => reminder.name === nameObject.name)) {
    
      axios
        .post(`/api/reminders`, nameObject)
        .then(response => {
          this.setState({
            reminders: this.state.reminders.concat(response.data),
            newName: '',
            newDate: ''
          })
        })
    }
  
    
  }

  deleteName = (id) => {
    if(window.confirm("Do you really want to delete this?")) {
      axios
        .delete(`/api/reminders/${id}`)
        .then(response => {
          this.setState({ 
            reminders: 
            this.state.reminders.filter(n => n.id !== id) })
        })
    }
  }

  render() {
    return (
      <div>
        <h2>Add reminder</h2>
        <Form 
          newName={this.state.newName}
          newDate={this.state.newDate}
          handleSubmit={this.addName}
          handleNameChange={this.handleNameChange}
          handleDateChange={this.handleDateChange}
        />
        <h2>Reminders:</h2>
          <ul>
          {this.state.reminders.map(reminder => 
          <Reminder 
            key={reminder.id} 
            reminder={reminder} 
            handleDelete={this.deleteName}/>)}
          </ul>
        <div>
            debug: {this.state.newName}
        </div>
      </div>
    )
  }
}

export default App