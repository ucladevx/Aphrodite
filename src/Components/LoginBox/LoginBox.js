import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom'

const responseGoogle = response => {
  console.log(response);
};

const logout = response => {
  console.log(response);
};

class LoginBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
           loginError: false,
           redirect: false
        };
        this.signup = this.signup.bind(this);
    }

    PostData(type, userData) {
        let BaseURL = 'https://apipaypal.9lessons.info/apipaypal/';
        //let BaseURL = 'http://localhost/socialapi/';

        return new Promise((resolve, reject) =>{
            fetch(BaseURL+type, {
                method: 'POST',
                body: JSON.stringify(userData)
            })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
               reject(error);
            });

        });
    }

    signup(res, type) {
        let postData
        console.log(res)
        if (type === 'google' && res.w3.U3) {

            postData = {
              name: res.w3.ig,
              provider: type,
              email: res.w3.U3,
              provider_id: res.El,
              token: res.Zi.access_token,
              provider_pic: res.w3.Paa
            };

            let cached = {
                firstName: res.profileObj.givenName,
                lastName: res.profileObj.familyName,
                email: res.profileObj.email,
                googleID: res.profileObj.googleId

            }
            sessionStorage.setItem("userData", JSON.stringify(cached));
            this.setState({redirect: true});
            //this.props.history.push('/form')

        }
        // if (postData) {
        //
        //     this.PostData('signup', postData).then((result) => {
        //        let responseJson = result;
        //        sessionStorage.setItem("userData", JSON.stringify(responseJson));
        //        this.setState({redirect: true});
        //     });
        // }
        else {}
    }

    render() {
        if (this.state.redirect || sessionStorage.getItem('userData')) {
            let obj = JSON.parse(sessionStorage.getItem('userData'))
            //console.log(JSON.parse(obj))

            return (<Redirect to={{
                pathname: '/form',
                state: { name: obj.firstName + " " + obj.lastName, major: "", year: ""}
                }}
            />
        );

            //this.props.history.push('/form')
        }

        const responseGoogle = (response) => {
            console.log("google console");
            console.log(response);
            this.signup(response, 'google');
        }

        return (
            <div className="row body">
            <div className="medium-12 columns">
            <div className="medium-12 columns">
            <h2 id="welcomeText"></h2>

            <GoogleLogin
            clientId="460970232119-m0phgjbd6gdnt01enms2shvbi3sajt1a.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            hostedDomain="g.ucla.edu"
            />

            </div>
            </div>
            </div>
        );
    }

}

export default withRouter(LoginBox);
