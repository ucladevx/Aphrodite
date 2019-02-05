import React, { Component } from "react";
import ClassBubble from "../ClassBubble/ClassBubble";

class QuarterList extends Component {
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
        {this.props.quarter.map(q =>
          {return <ClassBubble name={q.name}/>
        })}
      </div>
    );
  }
}

export default QuarterList;
