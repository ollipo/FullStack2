import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const title = 'Superadvanced web phonebook app'
  const name1 = 'John Doe'
  const phone1 = '358401234567'
  const name2 = 'Jane Doe'
  const phone2 = '44551234567'
  const name3 = 'Foo bar'
  const phone3 = '000'

  return (
    <div>
      <Header title={title} />
      <Contents name1={name1}
                phone1={phone1} 
                name2={name2} 
                phone2={phone2}
                name3={name3} 
                phone3={phone3} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Contents = (props) => {
  return (
    <div>
      <Entry name={props.name1} phone={props.phone1} />
      <Entry name={props.name2} phone={props.phone2} />
      <Entry name={props.name3} phone={props.phone3} />
    </div>
  )
}

const Entry = (props) => {
  return (
    <div>
      <p>{props.name} {props.phone}</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
