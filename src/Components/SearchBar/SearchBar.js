import React, { Component } from "react";
import ClassCard from "../ClassCard/ClassCard";
import "./SearchBar.css";
import Collapsible from "react-collapsible";

class SearchBar extends Component {
  moreOptions = () => {
    return <span className="options"> more options </span>;
  };

  render() {
    return (
      <div className="search-column">
        <div className="search-box">
          <input className="search-bar" type="text" name="Search" />
          <Collapsible trigger={this.moreOptions()}>
            <div> I am collapsible!! </div>
          </Collapsible>
        </div>

        <ClassCard
          classCategory="Computer Science"
          classNumber="M146"
          className="Introduction to Machine Learning"
          units="4.0"
          gradeType="Letter Grade"
          classRestrictions={["Ug Engr", "Bioinfo Minor"]}
          impacted="No"
          level="Upper Division"
          preRequisites={["Civil and Environmental Engineering"]}
          coRequisites={["None"]}
        />

        <ClassCard
          classCategory="Computer Science"
          classNumber="M152A"
          className="Introductory Digital Design Laboratory"
          units="4.0"
          gradeType="Letter Grade"
          classRestrictions={["Ug Engr", "Bioinfo Minor"]}
          impacted="No"
          level="Upper Division"
          preRequisites={["Civil and Environmental Engineering"]}
          coRequisites={["None"]}
        />
      </div>
    );
  }
}

export default SearchBar;
