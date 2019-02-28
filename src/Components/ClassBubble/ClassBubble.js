import React, { Component } from "react";
import "./ClassBubble.css";
import { connect } from "react-redux";
import * as actionTypes from "../../Actions/classesAction";

class ClassBubble extends Component {
  cardView = () => {
    console.log(
      this.props.name + " ClassBubble clicked. At index " + this.props.index
    );
    this.props.onRemovedClass(this.props.index, this.props.id);
  };

  bubbleColor = () => {
    switch (this.props.dept) {
      case "COM SCI":
        return "#B875D7";
      case "PHYSICS":
        return "#FFCC69";
      case "MATH":
        return "#FF8F8F";
      default:
        return "#000000";
    }
  };

  render() {
    return (
      <div
        className="bubble"
        onClick={this.cardView}
        style={{ background: this.bubbleColor() }}
      >
        <div>{this.props.dept + " " + this.props.name}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clr: state.classesReducer.classes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemovedClass: (index, id) =>
      dispatch({
        type: actionTypes.REMOVE_CLASS,
        classData: { index: index, id: id }
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassBubble);
