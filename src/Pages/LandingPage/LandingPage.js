import React, { Component } from 'react';
import LoginBox from '../../Components/LoginBox/LoginBox';
import './LandingPage.css';
class LandingPage extends Component {
  render() {
    return (
      <div className="landing-wrapper">
        <div className="leftside">
          <p>This is some content</p>
        </div>
        <div className="rightside">
          <LoginBox />
        </div>
      </div>
    );
  }
}

export default LandingPage;
