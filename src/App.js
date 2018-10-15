import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import LoginBox from './Components/LoginBox/LoginBox';
import Form from './Components/Form/Form';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/loginbox" component={LoginBox}/>
          <Route exact path="/form" component={Form}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
