import React, { Component } from "react";
import ClassBubble from "../ClassBubble/ClassBubble";
import "./QuarterList.css"

class QuarterList extends Component {
  createClassBubble = (classBubble) => {
    return <ClassBubble name={classBubble}/>;
  }
  createClassBubbles = (quarter) => {
    return quarter.map(this.createClassBubble);
  }
  render() {
    return (
<<<<<<< HEAD
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px red solid"
        }}
      >
        {this.createClassBubbles(this.props.quarter)}
=======
      <div>
        <div className="quarter-list">
          {this.props.quarter.map(quarter =>
            { return <ClassBubble dept={quarter.dept} name={quarter.name}/> })}
        </div>
        <hr className="horizontal-line"/>
>>>>>>> 0cd2037460a2a960770414d2551bd23da8dc26a7
      </div>
    );
  }
}

export default QuarterList;
