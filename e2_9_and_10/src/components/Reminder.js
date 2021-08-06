import React from 'react'

const Reminder = ({ reminder, handleDelete }) => {
  return (
    <li>
      {reminder.timestamp} 
      {reminder.name}
        <button onClick={()=>handleDelete(reminder.id)}>Delete</button>
    </li>
  )
}

export default Reminder