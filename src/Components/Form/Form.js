import React, { Component } from "react";
import "./Form.css";
import { Link } from "react-router-dom";

// TO DO:
// make name, major (?) required input fields
// change start term to be two drop down menus (Fall, Winter, Spring and the year)
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.location.state.name,
      major: "",
      year: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value // updates the state key corresponding to the given input field
    });

    console.log("state of name: " + this.state.name);
    console.log("state of start term: " + this.state.year);
    console.log("state of major: " + this.state.major);
  }

  handleSubmit(event) {
    event.preventDefault();
    /*
    alert(
      "name: " +
      this.state.name +
      ", major: " +
      this.state.major +
      ", start term: " +
      this.state.year
    );
    */
  }

  createForm(formTitle) {
      var val = ""
      if(formTitle == "name") val = this.state.name
      if(formTitle == "major") val = this.state.major
      if(formTitle == "year") val = this.state.year
    return (
      <div className="form-group">
        <input
          type="text"
          id={formTitle}
          className="form-control"
          required
          name={formTitle}
          value={val}
          onChange={this.handleInputChange}
        />
        <label className="form-control-placeholder" htmlFor={formTitle}>
          {formTitle}
        </label>
      </div>
    );
  }
  /*
<div className="form-field">
        <input
          className="input"
          name={formTitle}
          placeholder={formTitle}
          type="text"
          value={this.state[{ formTitle }]}
          onChange={this.handleInputChange}
        />
      </div>
*/
  render() {
    return (
        <div style={{backgroundColor: 'powderblue'}}>
      <div>
        <div className="registration-form">
          {this.createForm("name")}
          {this.createForm("major")}
          {this.createForm("year")}

          <input hidden type="submit" />
          <Link
            to='/main'
            className="registration-button"
            type="submit"
            //onClick={this.handleSubmit}
          >
            Register
          </Link>
        </div>
      </div>
      </div>
    );
  }
}

export default Form;
