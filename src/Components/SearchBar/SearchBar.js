import React, { Component } from "react";
import ClassCard from "../ClassCard/ClassCard";
import ClassBubble from "../ClassBubble/ClassBubble";
import "./SearchBar.css";
import Collapsible from "react-collapsible";
// https://www.npmjs.com/package/react-collapsible
import ReactSearchBox from "react-search-box";
// https://github.com/ghoshnirmalya/react-search-box
import {Droppable} from 'react-beautiful-dnd';


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
        <div className="search-results-container">
          <div className="search-results">
            <Droppable 
              droppableId={this.props.id}
              >
              {provided => (
              <div 
                ref={provided.innerRef}
                innerRef={provided.innerRef}
                {...provided.droppableProps}
                className="search-list"
              >
                  {this.props.classes.map((c, index) => (
                    <ClassBubble
                      class={c}
                      index={index}
                    />
                  ))}
                  {provided.placeholder}
                </div>

              )}
            </Droppable>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
