import React, { Component } from "react";
import QuarterList from "../../Components/QuarterList/QuarterList";
import SearchBar from "../../Components/SearchBar/SearchBar";
class LandingPage extends Component {
  state = {
    classes: [
      ["CS 111", "CS 131", "CS 33"],
      ["CS 118", "CS 180", "CS M51A", "CS M117"],
      ["CS 31", "CS 32"]
    ]
  }
  render() {
    return (
      <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
        <div style={{ height: "100vh", width: "50vw" }}>
          <SearchBar />
        </div>
        <div style={{ height: "100vh", width: "50vw" }}>
          <QuarterList quarter={this.state.classes[0]}/>
          <QuarterList quarter={this.state.classes[1]}/>
          <QuarterList quarter={this.state.classes[2]}/>
        </div>
      </div>
    );
  }
}

export default LandingPage;
