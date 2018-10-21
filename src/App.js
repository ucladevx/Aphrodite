import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import LoginBox from './Components/LoginBox/LoginBox';
import Form from './Components/Form/Form';
import LandingPage from './Pages/LandingPage/LandingPage';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/loginbox" component={LoginBox}/>
          <Route exact path="/form" component={Form}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
