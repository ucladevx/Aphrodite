import React, { Component } from "react";
import { connect } from 'react-redux';
import {DragDropContext} from 'react-beautiful-dnd';

import QuarterList from "../../Components/QuarterList/QuarterList";
import SearchBar from "../../Components/SearchBar/SearchBar";
import './MainPage.css';

class LandingPage extends Component {
  state = {
    classes: {
      'c1' : { id: 'c1', dept: "COM SCI", name: "1" },
      'c2' : { id: 'c2', dept: "COM SCI", name: "31" },
      'c3' : { id: 'c3', dept: "ENGCOMP", name: "3" },
      'c4' : { id: 'c4', dept: "MATH", name: "31A" }
    },
    quarters: {
      'q1': {
        id: 'q1',
        title: "To Do",
        classIds: ['c1','c2']
      },
      'q2': {
        id: 'q2',
        title: "To Do",
        classIds: []
      },
      'q3': {
        id: 'q3',
        title: "To Do",
        classIds: ['c3']
      },
      'q4': {
        id: 'q4',
        title: "To Do",
        classIds: ['c4']
      }
    },
    quarterOrder: ['q1', 'q2', 'q3', 'q4']
  };

  onDragEnd = result =>{
    const {destination, source, draggableId} = result;
    if (!destination){
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.quarters[source.droppableId];
    const finish = this.state.quarters[destination.droppableId];

    if (start === finish){
      const newClassIds = Array.from(start.classIds);
      newClassIds.splice(source.index, 1);
      newClassIds.splice(destination.index, 0, draggableId);

      const newQuarter = {
        ...start,
        classIds: newClassIds,
      };

      const newState = {
        ...this.state,
        quarters: {
          ...this.state.quarters,
          [newQuarter.id]: newQuarter,
        },
      };
      this.setState(newState);
      return;
    } 

    const startClassIds = Array.from(start.classIds);
    startClassIds.splice(source.index, 1);
    const newStart = {
      ...start,
      classIds: startClassIds,
    };

    const finishClassIds = Array.from(finish.classIds);
    finishClassIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      classIds: finishClassIds,
    };

    const newState = {
      ...this.state,
      quarters: {
        ...this.state.quarters,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };
  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        <div className='main-wrapper'>
          <div className='background'/>
          <div className='search-wrapper'>
            <SearchBar />
          </div>
          <div className='quarter-list-wrapper'>
          {
            this.state.quarterOrder.map((qid, index) => {
              const q = this.state.quarters[qid];
              const cls = q.classIds.map(cid => this.state.classes[cid])

              return <QuarterList 
                quarter={q} 
                classes={cls} 
                id={qid}
                //index={index}
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
    //qorder: state.classesReducer.quarterOrder,
    //quarters: state.classesReducer.quarters
  }
};
export default LandingPage;
//export default connect(mapStateToProps)(LandingPage);