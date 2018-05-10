import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter'
import Chat from './components/Chat'


class App extends Component {



  render() {
    return (
      <div className="App">

        <Counter />
        <Chat/>
      
      </div>
    );
  }
}

export default App;
