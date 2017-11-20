import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicExample from './BasicExample';
import PopulateExample from './PopulateExample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Formzy</h1>
        </header>
        <p className="App-intro">
          To get started, try the example.
        </p>
        <BasicExample />
        <PopulateExample />
      </div>
    );
  }
}

export default App;
