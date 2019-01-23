import React, { Component } from "react";
import "./ClassCard.css";

class ClassCard extends Component {
  state = {
    classCategory: "Computer Science",
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
        <div>
          <span className="class-number" style={{ display: "inline" }}>
            {this.state.classNumber} -
          </span>
          <span className="class-title">{" " + this.state.className}</span>
        </div>

        <div>
          <span className="class-info"> Units: </span>
          <span className="info"> {" " + this.state.units} </span>
        </div>

        <div>
          <span className="class-info">Grade Type:</span>
          <span className="info"> {" " + this.state.gradeType} </span>
        </div>

        <div>
          <span className="class-info"> Class Restrictions: </span>
          <span className="info">{" " + this.state.classRestrictions[0]}</span>
        </div>

        <div>
          <span className="class-info"> Impacted: </span>
          <span className="info"> {" " + this.state.impacted} </span>
        </div>

        <div>
          <span className="class-info"> Pre-Requisites: </span>
          <span className="info"> {" " + this.state.preRequisites[0]} </span>
        </div>

        <div>
          <span className="class-info"> Co-Requisites: </span>
          <span className="info"> {" " + this.state.coRequisites[0]} </span>
        </div>
      </div>
    );
  }
}

export default ClassCard;
