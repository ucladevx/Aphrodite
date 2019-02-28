import React, { Component } from "react";
import ClassCard from "../ClassCard/ClassCard";
class SearchBar extends Component {
  render() {
    return (
      <div style={{ border: "1px pink solid" }}>
        <input type="text" name="Search" />
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
      </div>
    );
  }
}

export default SearchBar;
