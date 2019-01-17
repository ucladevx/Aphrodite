import React, { Component } from "react";
import QuarterList from "../../Components/QuarterList/QuarterList";
import SearchBar from "../../Components/SearchBar/SearchBar";
class LandingPage extends Component {
  render() {
    return (
      <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
        <div style={{ height: "100vh", width: "50vw" }}>
          <SearchBar />
        </div>
        <div style={{ height: "100vh", width: "50vw" }}>
          <QuarterList />
          <QuarterList />
          <QuarterList />
          <QuarterList />
        </div>
      </div>
    );
  }
}

export default LandingPage;
