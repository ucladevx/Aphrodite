import React, { Component } from "react";
import "./ClassCard.css";

class ClassCard extends Component {
  state = {
    classNumber: "M146",
    className: "Introduction to Machine Learning",
    units: "4.0",
    gradeType: "Letter Grade",
    classRestrictions: ["Ug Engr", "Bioinfo Minor"],
    impacted: "No",
    level: "Upper Division",
    // add a loop through lists in JSX
    preRequisites: ["Civil and Environmental Engineering"],
    coRequisites: ["None"],

    cardOpen: false
  };

  cardOpenHandler = () => {
    console.log("card clicked");
    this.setState({
      cardOpen: true
      // this should eventually toggle back and forth
    });
  };

  render() {
    return (
      <div className="class-card" onClick={() => this.cardOpenHandler()}>
        <h1>
          {" "}
          {this.state.classNumber} - {this.state.className}{" "}
        </h1>
        <p className="class-info"> Units: {this.state.units} </p>
        <p className="class-info"> Grade Type: {this.state.gradeType} </p>
        <p className="class-info">
          {" "}
          Class Restrictions: {this.state.classRestrictions[0]}{" "}
        </p>
        <p className="class-info"> Impacted: {this.state.impacted} </p>
        <p className="class-info">
          {" "}
          Pre-Requisites: {this.state.preRequisites[0]}{" "}
        </p>
        <p className="class-info">
          {" "}
          Co-Requisites: {this.state.coRequisites[0]}{" "}
        </p>
      </div>
    );
  }
}

export default ClassCard;
