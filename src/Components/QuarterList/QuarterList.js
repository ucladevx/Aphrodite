import React, { Component } from "react";
import ClassBubble from "../ClassBubble/ClassBubble";

class QuarterList extends Component {
  createClassBubble = (classBubble) => {
    return <ClassBubble name={classBubble}/>;
  }
  createClassBubbles = (quarter) => {
    return quarter.map(this.createClassBubble);
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px red solid"
        }}
      >
        {this.createClassBubbles(this.props.quarter)}
      </div>
    );
  }
}

export default QuarterList;
