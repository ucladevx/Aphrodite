import React, { Component } from "react";
import LoginBox from "../../Components/LoginBox/LoginBox";
import { Link } from "react-router-dom";
import "./LandingPage.css";
class LandingPage extends Component {
  render() {
    return (
      <div className="landing-wrapper">
        <LoginBox />
        <Link to='/form'>
          Form Page
        </Link>
      </div>
    );
  }
}

export default LandingPage;
