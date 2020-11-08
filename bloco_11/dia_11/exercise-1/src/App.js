import React from 'react';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const list = ['first', 'second', 'third'];

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        {task(123)}
        <ul>
          {list.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
