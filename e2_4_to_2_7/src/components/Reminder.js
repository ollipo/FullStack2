import React from 'react'

const Reminder = ({ reminder }) => {
  return (
    <li>{reminder.timestamp} {reminder.name}</li>
  )
}

export default Reminder