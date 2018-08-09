import React, { Component } from 'react';
import './App.css';
import Signin from './components/SignIn';
import MainPage from './components/MainPage';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Switch />
        <Route exact path="/" render={props => <Signin {...props} {...this.state}/> } />
        <Route exact path="/notes" render={props => <MainPage {...props} {...this.state}/> } />
      </div>
    );
  }
}

export default App;
