import React, { Component } from "react";
import ClassBubble from "../ClassBubble/ClassBubble";
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
        <Droppable 
          droppableId={this.props.id}
          direction="horizontal"
          >
          {provided => (
          <div 
            ref={provided.innerRef}
            innerRef={provided.innerRef}
            {...provided.droppableProps}
            className="quarter-list"
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
        <hr className="horizontal-line" />
      </div>
    );
  }
}

export default QuarterList;
