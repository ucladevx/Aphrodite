import React, { Component } from "react";
import ClassCard from "../ClassCard/ClassCard";
class SearchBar extends Component {
  render() {
    return (
      <div style={{ border: "1px pink solid" }}>
        <input type="text" name="Search" />
        <ClassCard />
      </div>
    );
  }
}

export default SearchBar;
