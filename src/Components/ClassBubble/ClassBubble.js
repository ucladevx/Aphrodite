import React, { Component } from "react";
import "./ClassBubble.css";
import {Draggable} from 'react-beautiful-dnd';

class ClassBubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  componentWillMount(){
    //document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount(){
    //document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    /*
    this.setState({
      selected: this.node.contains(e.target)
    });
    */
  }

  deleteClass = () => {
    /*
    this.setState({
      selected: false
    });
    this.props.onRemovedClass(this.props.quarter, this.props.id);
    */
  }

  bubbleColor = () => {
    if (this.props.class.id.includes("_ML")) {
      return "#FFCC69"; //yellow
    } else {
      return '#B875D7'; //purple
    }
    /*
    switch (this.props.class.dept) {
      case "COM SCI":
        return "#B875D7";
      case "PHYSICS":
        return "#FFCC69";
      case "MATH":
        return "#FF8F8F";
      case "CHEM":
        return "#77EE98";
      case "STATS":
        return "#FFA978"
      case "ENGCOMP":
        return "#77D6FF";
      default:
        return "#80A4FF";
    }
    */
  };

  render() {
    return (
      <Draggable
        draggableId={this.props.class.id}
        index={this.props.index}
      >
        {provided => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            innerRef={provided.innerRef}
            //ref={node => this.node = node}
          >
            <div
              id={this.props.id}
              className="bubble"
              style={{ 
                background: this.bubbleColor(),
                border: (this.state.selected ? "5px solid white" : null)
              }}>
              <div>{this.props.class.dept + " " + this.props.class.name}</div>
                {this.state.selected? 
                  <div className="exit" onClick={this.deleteClass}>x</div>
                : null}
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default ClassBubble;
