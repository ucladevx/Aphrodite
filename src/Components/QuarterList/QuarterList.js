import React, { Component } from "react";
import ClassBubble from "../ClassBubble/ClassBubble";
import { connect } from "react-redux";

import "./QuarterList.css";

class QuarterList extends Component {
  render() {
    return (
      <div>
        <div className="quarter-list">
          {console.log(this.props)}
          {this.props.classrow.map(quarter => (
            <ClassBubble
              id={quarter.id}
              dept={quarter.dept}
              name={quarter.name}
              index={this.props.index}
            />
          ))}
        </div>
        <hr className="horizontal-line" />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    classrow: state.classesReducer.classes[ownProps.index]
  };
};

export default connect(mapStateToProps)(QuarterList);
