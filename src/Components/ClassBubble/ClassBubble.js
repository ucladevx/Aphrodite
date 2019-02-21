import React, { Component } from "react";
import "./ClassBubble.css";

class ClassBubble extends Component {
  cardView = () => {
    console.log(this.props.name + " ClassBubble clicked. At index " + this.props.index);
    this.props.delete(this.props.index, this.props.id);
  }

  bubbleColor = () => {
    switch (this.props.dept){
      case 'COM SCI':
        return '#B875D7';
      case 'PHYSICS':
        return '#FFCC69';
      case 'MATH':
        return '#FF8F8F';
    }
    return '#000000';
  }

  render() {
    return (
      <div className="bubble" onClick={this.cardView}
        style={{background: this.bubbleColor()}}>
        <div>
          {this.props.dept + ' ' + this.props.name}
        </div>
      </div>
    );
  }
}

export default ClassBubble;
