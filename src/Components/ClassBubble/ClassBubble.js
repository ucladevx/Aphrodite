import React, { Component } from "react";

class ClassBubble extends Component {
  cardView = () => {
    console.log(this.props.name + " ClassBubble clicked");
  }
  render() {
    return (
      <div style={{ width: 50, height: 50, border: "1px blue solid" }}
      onClick={this.cardView}>
        {this.props.name}
      </div>
    );
  }
}

export default ClassBubble;
