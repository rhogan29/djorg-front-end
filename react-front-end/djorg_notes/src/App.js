import React, { Component } from 'react';
import './App.css';
import Signin from './components/SignIn';
import MainPage from './components/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Signin />
      </div>
    );
  }
}

export default App;
