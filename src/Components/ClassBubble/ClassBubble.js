import React, { Component } from "react";
import "./ClassBubble.css";
import { connect } from "react-redux";
import * as actionTypes from "../../Actions/classesAction";

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
    this.setState({
      selected: this.node.contains(e.target)
    });
  }

  deleteClass = () => {
    this.setState({
      selected: false
    });
    this.props.onRemovedClass(this.props.index, this.props.id);
  }

  bubbleColor = () => {
    switch (this.props.dept) {
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
  };

  render() {
    return (
      <div
        ref={node => this.node = node}
        className="bubble"
        //onClick={this.cardView}
        style={{ 
          background: this.bubbleColor(),
          border: (this.state.selected ? "5px solid white" : null)
        }}
      >
        <div>{this.props.dept + " " + this.props.name}</div>
        {this.state.selected? 
            <div className="exit" onClick={this.deleteClass}>x</div>
           : null}
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
