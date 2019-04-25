import React, { Component } from "react";
import { connect } from 'react-redux';
import {DragDropContext} from 'react-beautiful-dnd';

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
        {this.props.qorder.map((qid, index) => (
            <QuarterList id={qid} index={index}/>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    qorder: state.classesReducer.quarterOrder
  }
};

export default connect(mapStateToProps)(LandingPage);