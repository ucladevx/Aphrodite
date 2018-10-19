import React, { Component } from 'react';
import './Form.css';

// https://reactjs.org/docs/forms.html based on this tutorial
// TO DO:
// make name, major (?) required input fields
// add start term -- drop down menu?



class Form extends Component {
  constructor(props) {
   
    super(props);

    this.state = {
      name: '',
      major: '',
      startTerm: ''
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

    console.log("state of name: " + this.state.name)
    console.log("state of start term: " + this.state.startTerm)
    console.log("state of major: " + this.state.major)

    }
  
  handleSubmit(event) {
    alert('name: ' + this.state.name + ', major: ' + this.state.major + ", " + this.state.startTerm);

    event.preventDefault();
  }
  

  render() {
    return (
      <div className = "registration">

        <h3> Registration </h3>

        <div> 
          <label>
            Name 
            <input 
            name = "name" 
            type = "text" 
            value = {this.state.name} 
            onChange = {this.handleInputChange}
            />
          </label>
        </div>
        <div> 
          <label>
            Major 
            <input 
            name = "major" 
            type = "text" 
            value = {this.state.major} 
            onChange = {this.handleInputChange}
            />  
          </label>
        </div>
        <div> 
          <label>
            Start Term 
            <input 
            name = "startTerm" 
            type = "text" 
            value = {this.state.startTerm} 
            onChange = {this.handleInputChange}
            />  
          </label>
        </div>
        <div>
          <input hidden type = "submit" />
          <button type = "submit" onClick = {this.handleSubmit}>
          Register
          </button>
        </div>

      </div>

    );
  }
}

export default Form;
