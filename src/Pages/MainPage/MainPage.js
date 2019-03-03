import React, { Component } from "react";
import { connect } from 'react-redux';

import QuarterList from "../../Components/QuarterList/QuarterList";
import SearchBar from "../../Components/SearchBar/SearchBar";
import './MainPage.css';

class LandingPage extends Component {

  render() {
    return (
      <div className='main-wrapper'>
        <div className='background'/>
        <div className='search-wrapper'>
          <SearchBar />
        </div>
        <div className='quarter-list-wrapper'>
        {this.props.cls.map((quarter, index) => (
            <QuarterList index={index}/>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cls: state.classesReducer.classes
  }
};

export default connect(mapStateToProps)(LandingPage);