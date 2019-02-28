import React, { Component } from "react";
import ClassBubble from "../ClassBubble/ClassBubble";
import { connect } from 'react-redux';

import "./QuarterList.css"

class QuarterList extends Component {
  render() {
    return (
      <div>
        <div className="quarter-list">
          {this.props.cls[this.props.index].map(quarter => ( 
            <ClassBubble 
              id={quarter.id}
              dept={quarter.dept} 
              name={quarter.name}
              index={this.props.index}/> 
          ))}
        </div>
        <hr className="horizontal-line"/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cls: state.classesReducer.classes
  }
};

export default connect(mapStateToProps)(QuarterList);
