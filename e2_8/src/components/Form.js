import React from 'react'

const Form = ({ newName, newDate, handleSubmit, handleNameChange, handleDateChange }) => {
  return (
    <form onSubmit={handleSubmit}>
          <div>
            Name: <input
            value={newName}
            onChange={handleNameChange} />
          </div>
          <div>
            Date: <input
            value={newDate}
            onChange={handleDateChange} />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
  )
}

export default Form