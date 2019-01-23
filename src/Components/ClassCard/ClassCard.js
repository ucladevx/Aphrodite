import React, { Component } from "react";
import "./ClassCard.css";

class ClassCard extends Component {
  state = {
    // GET post to back end
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
      // this should eventually toggle back and forth, to change card display
    });
  };

  createCategory(category) {
    return (
      <div>
        <span className="category"> {category + ": "} </span>
        <span className="info"> {" " + this.state[category]} </span>
      </div>
    );
  }

  render() {
    return (
      <div className="class-card" onClick={() => this.cardOpenHandler()}>
        <div>
          <span className="class-number" style={{ display: "inline" }}>
            {this.state.classNumber} -
          </span>
          <span className="class-title">{" " + this.state.className}</span>
        </div>

        {this.createCategory("units")}
        {this.createCategory("gradeType")}
        {this.createCategory("classRestrictions")}
        {this.createCategory("impacted")}
        {this.createCategory("preRequisites")}
        {this.createCategory("coRequisites")}
      </div>
    );
  }
}

export default ClassCard;
