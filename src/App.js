import React, { Component } from 'react';
import logo from './logo.png';
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
          <code>
            yarn add formzy
          </code>
        </header>
        <p className="App-intro">
          To get started, try the example.
        </p>
        <BasicExample />
        <PopulateExample />
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
