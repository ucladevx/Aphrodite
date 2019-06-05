import React, { Component } from "react";
import ClassBubble from "../ClassBubble/ClassBubble";
import {Droppable} from 'react-beautiful-dnd';

import "./QuarterList.css";

class QuarterList extends Component {
  
  leftLabel = (index) => {  //FOR DEMO ONLY
    let quarter;
    let year;
    switch (index % 3) {
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
    console.log(this.props.year)
    year = (Math.floor((index + 2)/ 3) - 4 + this.props.year).toString().substring(2, 4);
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
