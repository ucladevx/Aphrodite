import React, { Component } from "react";
import QuarterList from "../../Components/QuarterList/QuarterList";
import SearchBar from "../../Components/SearchBar/SearchBar";
import './MainPage.css';
class LandingPage extends Component {
  state = {
    classes: [
      [
        { id: 1, dept: "COM SCI", name: "111" },
        { id: 2, dept: "COM SCI", name: "131" }, 
        { id: 3, dept: "COM SCI", name: "35L" }
      ],
      [
        { id: 4, dept: "COM SCI", name: "118" }, 
        { id: 5, dept: "COM SCI", name: "180" }, 
        { id: 6, dept: "COM SCI", name: "M51A" },
        { id: 7, dept: "PHYSICS", name: "1C" }
      ],
      [
        { id: 8, dept: "MATH", name: "61" },
        { id: 9, dept: "MATH", name: "115A" },
        { id: 10, dept: "COM SCI", name: "M117" }
      ]
    ]
  }

  delete_class = (index, id) => {
    const newClasses = [...this.state.classes];
    newClasses[index] = this.state.classes[index].filter(course => course.id !== id);
    this.setState({classes: newClasses});
  }

  render() {
    return (
      <div className='main-wrapper'>
        <div className='search-wrapper'>
          <SearchBar />
        </div>
        <div className='quarter-list-wrapper'>
        {this.state.classes.map((quarter, index) => {
            return <QuarterList 
              quarter={quarter}
              index={index}
              delete={this.delete_class}/>
          })}
        </div>
      </div>
    );
  }
}

export default LandingPage;
