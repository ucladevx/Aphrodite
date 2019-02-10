import React, { Component } from "react";

class ClassBubble extends Component {
  cardView = () => {
    console.log(this.props.name + " ClassBubble clicked");
  }
  render() {
    return (
      <div style={{ width: 80, height: 80, margin: 12, padding: 20,
        display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center",
        background: "#B875D7", borderRadius: 20,
        fontFamily: "Arial", fontStyle: "normal", fontSize: 20, color: "#FFFFFF"
      }}
      onClick={this.cardView}>
        {this.props.name}
      </div>
    );
  }
}

export default ClassBubble;
