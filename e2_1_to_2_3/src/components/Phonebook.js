import React from 'react'

const Phonebook = ({ phonebook }) => {
    return (
      <div>
      <Header title={phonebook.name} />
      <Contacts contacts={phonebook.contacts} />
      </div>
    )
  }
  
  const Header = (props) => {
    return (
        <h1>{props.title}</h1>
    )
  }
  
  const Contacts = ({contacts}) => {
    return (
      <div>
        <ul>
        {contacts.map(entry=>
        <Entry 
        name={entry.name} 
        phonenumber={entry.phonenumber} /> )}
        </ul>
        <p>Total number of entries: {contacts.length}</p>
      </div>
    )
  }
  
  const Entry = (props) => {
    return (
      <div>
        <p>Name: {props.name} Number: {props.phonenumber}</p>
      </div>
    )
  }
  
  export default Phonebook