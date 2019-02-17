import React, { Component } from "react";
import ClassBubble from "../ClassBubble/ClassBubble";
import "./QuarterList.css"

class QuarterList extends Component {
  render() {
    return (
      <div>
        <div className="quarter-list">
          {this.props.quarter.map(quarter =>
            { return <ClassBubble dept={quarter.dept} name={quarter.name}/> })}
        </div>
        <hr className="horizontal-line"/>
      </div>
    );
  }
}

export default QuarterList;
