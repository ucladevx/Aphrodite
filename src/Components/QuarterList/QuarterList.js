import React, { Component } from "react";
import ClassBubble from "../ClassBubble/ClassBubble";
import { connect } from "react-redux";
import {Droppable} from 'react-beautiful-dnd';

import "./QuarterList.css";

class QuarterList extends Component {
  
  leftLabel = (index) => {  //FOR DEMO ONLY
    let quarter;
    let year;
    switch (index % 4) {
      case 0:
        quarter = 'F ';
        break;
      case 1:
        quarter = 'W ';
        break;
      case 2:
        quarter = 'S ';
        break;
      default:
        return '';
    }
    if (index > 12){
      year = '22';
    } else if (index > 8) {
      year = '21';
    } else if (index > 4) {
      year = '20';
    } else if (index > 0) {
      year = '19';
    } else {
      year = '18';
    }
    return quarter + year;
  }

  render() {
    return (
      <div className="quarter-wrapper">
        <div className="left-label">
          {this.leftLabel(this.props.index)}
        </div>
        <div className="quarter-list">
          {console.log(this.props)}
          {this.props.classrow.map(classID => (
            <ClassBubble
              id={classID}
              quarter={this.props.id}
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
    classrow: state.classesReducer.quarters[ownProps.id].classIds
  };
};

export default connect(mapStateToProps)(QuarterList);
