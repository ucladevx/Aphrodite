import React, { Component } from "react";
import QuarterList from "../../Components/QuarterList/QuarterList";
import SearchBar from "../../Components/SearchBar/SearchBar";
class LandingPage extends Component {
  state = {
    classes: [
      [
        { name: "CS 111" },
        { name: "CS 131" }, 
        { name: "CS 33" }
      ],
      [
        { name: "CS 118" }, 
        { name: "CS 180" }, 
        { name: "CS M51A" },
        { name: "CS M117" }
      ],
      [
        { name: "CS 31" },
        { name: "CS 32" }
      ]
    ]
  }
  render() {
    return (
      <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
        <div style={{ height: "100vh", width: "50vw" }}>
          <SearchBar />
        </div>
        <div style={{ height: "100vh", width: "50vw" }}>
        {this.state.classes.map(q => {
            return <QuarterList 
              quarter={q}/>
          })}
        </div>
      </div>
    );
  }
}

export default LandingPage;
