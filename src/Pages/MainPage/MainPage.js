import React, { Component } from "react";
import { connect } from 'react-redux';

import QuarterList from "../../Components/QuarterList/QuarterList";
import SearchBar from "../../Components/SearchBar/SearchBar";
import './MainPage.css';
import * as actionTypes from '../../Actions/classesAction';

class LandingPage extends Component {

  render() {
    return (
      <div className='main-wrapper'>
        <div className='search-wrapper'>
          <SearchBar />
        </div>
        <div className='quarter-list-wrapper'>
        {this.props.clr.map((quarter, index) => (
            <QuarterList 
              quarter={quarter}
              index={index}
              />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clr: state.classes
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onRemovedClass: (index, id) => dispatch({type: actionTypes.REMOVE_CLASS, classData: {index: index, id: id}})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);