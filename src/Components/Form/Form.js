import React, { Component } from "react";
import "./Form.css";

// TO DO:
// make name, major (?) required input fields
// change start term to be two drop down menus (Fall, Winter, Spring and the year)

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      major: "",
      startTerm: ""
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
    console.log("state of start term: " + this.state.startTerm);
    console.log("state of major: " + this.state.major);
  }

  handleSubmit(event) {
    alert(
      "name: " +
        this.state.name +
        ", major: " +
        this.state.major +
        ", start term: " +
        this.state.startTerm
    );

    event.preventDefault();
  }

  createForm(formTitle) {
    return (
      <div>
        <label>
          {formTitle}
          <input
            className="registration-input"
            name={formTitle}
            type="text"
            value={this.state[{ formTitle }]}
            onChange={this.handleInputChange}
          />
        </label>
      </div>
    );
  }

  render() {
    return (
      <div className="registration">
        <h3 className="registration-title"> Registration </h3>
        {this.createForm("name")}
        {this.createForm("major")}
        {this.createForm("startTerm")}
        <div>
          <input hidden type="submit" />
          <button
            className="registration-button"
            type="submit"
            onClick={this.handleSubmit}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
