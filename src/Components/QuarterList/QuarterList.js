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
          borderBottom: "1px solid black",
          padding: 10
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
