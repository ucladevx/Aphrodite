import React, { Component } from "react";
import ClassCard from "../ClassCard/ClassCard";
import "./SearchBar.css";
import Collapsible from "react-collapsible";
// https://www.npmjs.com/package/react-collapsible
import ReactSearchBox from "react-search-box";
// https://github.com/ghoshnirmalya/react-search-box
import styled from "styled-components";

// can i override the styles of imported components

class SearchBar extends Component {
  // array of objects holding all searchable classes
  classData = [
    {
      key: "CS 33",
      value: "Computer Science 33"
    },
    {
      key: "CS M152A",
      value: "Computer Science M152A"
    }
  ];

  // the tag that triggers the collapsible feature
  moreOptions = () => {
    return <div className="options"> more options </div>;
  };

  createSubcategory = subcategory => {
    return <div> {subcategory} </div>;
  };

  render() {
    return (
      <div className="search-column">
        <div className="search-box">
          <div className="search-bar">
            <ReactSearchBox
              // style={{ width: "30px" }}
              placeholder="search class"
              value="class"
              data={this.classData}
              callback={record => console.log(record)}
            />
          </div>

          <Collapsible trigger={this.moreOptions()}>
            <div className="search-subcategory">
              <Collapsible trigger={this.createSubcategory("Class")}>
                Class Details
              </Collapsible>
            </div>

            <div className="search-subcategory">
              <Collapsible trigger={this.createSubcategory("Department")}>
                Department Details
              </Collapsible>
            </div>
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
