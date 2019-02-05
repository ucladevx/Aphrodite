import React, { Component } from "react";
import QuarterList from "../../Components/QuarterList/QuarterList";
import SearchBar from "../../Components/SearchBar/SearchBar";
class LandingPage extends Component {
  state = {
    classes: [
      [
        { name: "COM SCI 111" },
        { name: "COM SCI 131" }, 
        { name: "COM SCI 33" }
      ],
      [
        { name: "COM SCI 118" }, 
        { name: "COM SCI 180" }, 
        { name: "COM SCI M51A" },
        { name: "COM SCI M117" }
      ],
      [
        { name: "COM SCI 31" },
        { name: "COM SCI 32" }
      ]
    ]
  }
  render() {
    return (
      <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
        <div style={{ height: "100vh", width: "50vw" }}>
          <SearchBar />
        </div>
        <div style={{ top: 1000, height: "100vh", width: "50vw" }}>
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
