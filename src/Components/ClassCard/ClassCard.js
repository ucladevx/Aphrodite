import React, { Component } from "react";
import "./ClassCard.css";
import Collapsible from "react-collapsible";
// https://www.npmjs.com/package/react-collapsible

class ClassCard extends Component {
  state = {
    cardClosed: true
  };

  cardOpenHandler = () => {
    console.log("card clicked");
    this.setState(prevState => ({
      cardClosed: !prevState.cardClosed
    }));
    console.log("new state of cardClosed: " + this.state.cardClosed);
  };

  // what are these classes/ where do they come from? Back end call
  createClassBlob = className => {
    return <div className="class-blob">{className}</div>;
  };

  createCategory = (category, property) => {
    return (
      <div>
        <span className="category"> {category + ": "} </span>
        <span className="property"> {" " + this.props[property]} </span>
      </div>
    );
  };

  createClosedCard = () => {
    return (
      <div>
        <div>
          <span className="class-number" style={{ display: "inline" }}>
            {this.props.classNumber} -
          </span>
          <span className="class-title">{" " + this.props.className}</span>
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
      <div className="class-card">
        <Collapsible
          trigger={this.createClosedCard()}
          onOpen={() => this.cardOpenHandler()}
          onClose={() => this.cardOpenHandler()}
        >
          {this.createCategory("Units", "units")}
          {this.createCategory("Grade Type", "gradeType")}
          {this.createCategory("Class Restrictions", "classRestrictions")}
          {this.createCategory("Impacted", "impacted")}
          <p> {"\n"} </p>
          {this.createCategory("Pre-Requisites", "preRequisites")}
          {this.createCategory("Co-Requisites", "coRequisites")}
          <p> {"\n"} </p>
        </Collapsible>
      </div>
    );
  }
}

export default ClassCard;

/*
        <ClassCard 
          classCategory = "Computer Science"
          classNumber = "M146"
          className = "Introduction to Machine Learning"
          units = "4.0"
          gradeType = "Letter Grade"
          classRestrictions = {["Ug Engr", "Bioinfo Minor"]}
          impacted = "No"
          level = "Upper Division"
          preRequisites = {["Civil and Environmental Engineering"]}
          coRequisites = {["None"]}
        />
*/
