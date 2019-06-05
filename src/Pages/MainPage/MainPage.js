import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actionTypes from "../../Actions/classesAction";
import {DragDropContext} from 'react-beautiful-dnd';

import QuarterList from "../../Components/QuarterList/QuarterList";
import SearchBar from "../../Components/SearchBar/SearchBar";
import './MainPage.css';

class LandingPage extends Component {
  onDragEnd = result =>{
    this.props.onDropClass(result);
  };

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        <div className='main-wrapper'>
          <button className='main-button'>CLICK</button>
          <div className='background'/>
          <div className='search-wrapper'>
            <SearchBar 
              quarter={this.props.quarters['search']}
              classes={this.props.quarters['search'].classIds.map(cid => this.props.classes[cid])}
              id='search'
            />
          </div>
          <div className='quarter-list-wrapper'>
          {
            this.props.quarterOrder.map(qid => {
              const q = this.props.quarters[qid];
              const cls = q.classIds.map(cid => this.props.classes[cid])

              return <QuarterList 
                quarter={q} 
                classes={cls} 
                id={qid}
              />;
            })}
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => {
  return {
    classes: state.classesReducer.classes,
    quarterOrder: state.classesReducer.quarterOrder,
    quarters: state.classesReducer.quarters
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onDropClass: result =>
      dispatch({
        type: actionTypes.DROP_CLASS,
        result: result
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);