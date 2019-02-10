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
    alert(
      "name: " +
        this.state.name +
        ", major: " +
        this.state.major +
        ", start term: " +
        this.state.year
    );

    event.preventDefault();
  }

  createForm(formTitle) {
    return (
      <div className="form-group">
        <input
          type="text"
          id={formTitle}
          className="form-control"
          required
          value={this.state[{ formTitle }]}
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
      <div>
        <div className="registration-form">
          {this.createForm("name")}
          {this.createForm("major")}
          {this.createForm("year")}

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
