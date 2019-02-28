import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";

const responseGoogle = response => {
  console.log(response);
};

const logout = response => {
  console.log(response);
};

class LoginBox extends Component {
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="460970232119-m0phgjbd6gdnt01enms2shvbi3sajt1a.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} />
      </div>
    );
  }
}

export default LoginBox;
