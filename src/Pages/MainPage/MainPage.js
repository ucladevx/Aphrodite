import React, { Component } from "react";
import QuarterList from "../../Components/QuarterList/QuarterList";
import SearchBar from "../../Components/SearchBar/SearchBar";
import './MainPage.css';
class LandingPage extends Component {
  state = {
    classes: [
      [
        { dept: "COM SCI", name: "111" },
        { dept: "COM SCI", name: "131" }, 
        { dept: "COM SCI", name: "35L" }
      ],
      [
        { dept: "COM SCI", name: "118" }, 
        { dept: "COM SCI", name: "180" }, 
        { dept: "COM SCI", name: "M51A" },
        { dept: "PHYSICS", name: "1C" }
      ],
      [
        { dept: "MATH", name: "61" },
        { dept: "MATH", name: "115A" },
        { dept: "COM SCI", name: "M117" }
      ]
    ]
  }
  render() {
    return (
      <div className='main-wrapper'>
        <div className='search-wrapper'>
          <SearchBar />
        </div>
        <div className='quarter-list-wrapper'>
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
