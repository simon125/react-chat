import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';



class App extends Component {
  state = {
    counter: 0
  }

  componentDidMount() {

    this.putNewValue()

  }
  // MDN
  // fetch(url, {
  //   method: 'POST', // or 'PUT'
  //   body: JSON.stringify(data), // data can be `string` or {object}!
  //   headers: new Headers({
  //     'Content-Type': 'application/json'
  //   })
  // }).then(res => res.json())
  // .catch(error => console.error('Error:', error))
  // .then(response => console.log('Success:', response));


  putNewValue = () => {

    fetch('https://jfddl4-sandbox.firebaseio.com/szymon/counter/.json', {
      method: 'PUT', // or 'PUT'
      body: JSON.stringify(this.state.counter), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json'
      })

    })
  }
refreshState = () => {

this.setState

}


  ///https://jfddl4-sandbox.firebaseio.com/szymon/counter/.json

  render() {
    return (
      <div className="App">

        <h1>{this.state.counter}</h1>
        <RaisedButton
          label="-5"
          secondary={true}
          onClick={() => this.setState({ counter: this.state.counter - 5 })}
        />
        <RaisedButton
          label="-1"
          secondary={true}
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        />
        <RaisedButton
          label="+1"
          primary={true}
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        />
        <RaisedButton
          label="+5"
          primary={true}
          onClick={() => this.setState({ counter: this.state.counter + 5 })}
        />
        <RaisedButton
          label="Wyzeruj"
          primary={true}
          onClick={() => this.setState({ counter: 0})}
        />
        <RaisedButton
          label="refresh DB"
          primary={true}
          onClick={() => this.putNewValue()}
        />
      </div>
    );
  }
}

export default App;
