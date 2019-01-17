import React, { Component } from "react";
import LoginBox from "../../Components/LoginBox/LoginBox";
import "./LandingPage.css";
class LandingPage extends Component {
  render() {
    return (
      <div className="landing-wrapper">
        <LoginBox />
      </div>
    );
  }
}

export default LandingPage;
