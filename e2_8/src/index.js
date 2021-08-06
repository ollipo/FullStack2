import React from 'react';
import ReactDOM from 'react-dom';
import App from'./components/App';



const reminders = [
  {
    name: 'Buy some eggs',
    timestamp: "2018-11-10T13:00:00.141Z"
  }
]

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
