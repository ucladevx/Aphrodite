import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actionTypes from "../../Actions/classesAction";
import {DragDropContext} from 'react-beautiful-dnd';

import QuarterList from "../../Components/QuarterList/QuarterList";
import SearchBar from "../../Components/SearchBar/SearchBar";
import './MainPage.css';
const axios = require("axios");

class LandingPage extends Component {
  onPostClass = () => {
    let userDetails = JSON.parse(sessionStorage.getItem('userData'))
    const takenCourses = {
      "classes": this.props.classes,
      "quarters": this.props.quarters
      };
    let formData = {
      "id": userDetails["googleID"],
      "name": this.props.name,
      "major": this.props.major,
      "email": userDetails["email"],
      "gradYear": this.props.year,
      "takenCourses": takenCourses
      };

    axios.post("http://localhost:3001/post/user", formData)
          .then((response) => {
            console.log("success", response);
          }).catch((error) => {
            console.log(error);
      });

    formData = {
      "department": this.props.major,
      "takenCourses": takenCourses
      };

    axios.post("http://localhost:3001/post/validMajorClasses", formData)
        .then((response) => {
          console.log("reload", response.data)
          this.props.onReloadClass(response.data);
        }).catch((error) => {
          console.log(error);
    });
  }

  onDragEnd = result =>{
    this.props.onDropClass(result);
  };

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        <div className='main-wrapper'>
          <button className='main-button'
            onClick={this.onPostClass}
          >
            CLICK
          </button>
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
            this.props.quarterOrder.map((qid, index) => {
              const q = this.props.quarters[qid];
              const cls = q.classIds.map(cid => this.props.classes[cid])
              return <QuarterList
                quarter={q}
                classes={cls}
                id={qid}
                index={index}
                year={parseInt(this.props.year, 10)}
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
    quarters: state.classesReducer.quarters,
    name: state.formReducer.name,
    major: state.formReducer.major,
    year: state.formReducer.year
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onDropClass: result =>
      dispatch({
        type: actionTypes.DROP_CLASS,
        result: result
      }),
    onReloadClass: result =>
      dispatch({
        type: actionTypes.RELOAD_CLASS,
        result: result
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
