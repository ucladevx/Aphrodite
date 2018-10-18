import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
  constructor(props) {
    super(props);
    // console.log("constructor called");
    this.state = {
      name: '',
      major: ''
  };

    // console.log("initial state: " + this.state.name + ", " + this.state.major)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name; 

    this.setState( {
      [name]: value // updates the state key corresponding to the given input field
    });

    console.log("state of name: " + this.state.name)
    console.log("state of major: " + this.state.major)

    }
  
  handleSubmit(event) {
    alert('name: ' + this.state.name + ', major: ' + this.state.major);

    event.preventDefault();
  }
  

  render() {
    return (
      <div className = "registration-form">

        <h3> Registration </h3>

        <form onSubmit = {this.handleSubmit}>

          <label>
            Name: 
            <input name = "name" value = {this.state.name} type = "text" onChange = {this.handleInputChange}/>
          </label>

          <label>
            Major: 
            <input name = "major" value = {this.state.major} type = "text" onChange = {this.handleInputChange}/>  
          </label>


            <input type = "submit" value = "submit"/>

        </form>


        <button className = "registration-button" type = "submit" label = "submit" > Submit </button>





      </div>

    );
  }
}

export default Form;
