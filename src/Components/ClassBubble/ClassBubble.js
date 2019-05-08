import React, { Component } from "react";
import "./ClassBubble.css";
import { connect } from "react-redux";
import * as actionTypes from "../../Actions/classesAction";
import {Draggable} from 'react-beautiful-dnd';

class ClassBubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  componentWillMount(){
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount(){
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    /*
    this.setState({
      selected: this.node.contains(e.target)
    });
    */
  }

  deleteClass = () => {
    this.setState({
      selected: false
    });
    this.props.onRemovedClass(this.props.quarter, this.props.id);
  }

  bubbleColor = () => {
    return "#B875D7";
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
/*
const mapStateToProps = (state, ownProps) => {
  return {
    //class: state.classesReducer.classes[ownProps.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemovedClass: (quarterID, classID) =>
      dispatch({
        type: actionTypes.REMOVE_CLASS,
        classData: { quarterID: quarterID, classID: classID }
      })
  };
};
*/
//export default connect(mapStateToProps,mapDispatchToProps)(ClassBubble);
export default ClassBubble;
