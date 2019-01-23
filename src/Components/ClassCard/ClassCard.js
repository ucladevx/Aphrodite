import React, { Component } from "react";
import "./ClassCard.css";
import Collapsible from "react-collapsible";

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

  // what are these classes/ where do they come from?
  createClassBlob = className => {
    return <div className="class-blob">{className}</div>;
  };

  createCategory = (category, property) => {
    return (
      <div>
        <span className="category"> {category + ": "} </span>
        <span className="property"> {" " + this.state[property]} </span>
      </div>
    );
  };

  createClosedCard = () => {
    return (
      <div>
        <div>
          <span className="class-number" style={{ display: "inline" }}>
            {this.state.classNumber} -
          </span>
          <span className="class-title">{" " + this.state.className}</span>
        </div>

        {this.createClassBlob("CS 33")}
        {this.createClassBlob("STATS")}
        {this.createClassBlob("COM SCI M151A")}
        <p> {"\n"} </p>
      </div>
    );
  };

  render() {
    return (
      <div className="class-card" onClick={() => this.cardOpenHandler()}>
        <Collapsible trigger={this.createClosedCard()}>
          {this.createCategory("Units", "units")}
          {this.createCategory("Grade Type", "gradeType")}
          {this.createCategory("Class Restrictions", "classRestrictions")}
          {this.createCategory("Impacted", "impacted")}
          <p> {"\n"} </p>
          {this.createCategory("Pre-Requisites", "preRequisites")}
          {this.createCategory("Co-Requisites", "coRequisites")}
        </Collapsible>
      </div>
    );
  }
}

export default ClassCard;
