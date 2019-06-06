import * as actionTypes from "../Actions/classesAction";
const initialState = {
  classes: {},
  quarters: {
    'search': {
      id: 'search',
      title: "To Do",
      classIds: []
    },
    'q1': {
      id: 'q1',
      title: "To Do",
      classIds: []
    },
    'q2': {
      id: 'q2',
      title: "To Do",
      classIds: []
    },
    'q3': {
      id: 'q3',
      title: "To Do",
      classIds: []
    },
    'q4': {
      id: 'q4',
      title: "To Do",
      classIds: []
    },
    'q5': {
      id: 'q5',
      title: "To Do",
      classIds: []
    },
    'q6': {
      id: 'q6',
      title: "To Do",
      classIds: []
    },
    'q7': {
      id: 'q7',
      title: "To Do",
      classIds: []
    },
    'q8': {
      id: 'q8',
      title: "To Do",
      classIds: []
    },
    'q9': {
      id: 'q9',
      title: "To Do",
      classIds: []
    },
    'q10': {
      id: 'q10',
      title: "To Do",
      classIds: []
    },
    'q11': {
      id: 'q11',
      title: "To Do",
      classIds: []
    },
    'q12': {
      id: 'q12',
      title: "To Do",
      classIds: []
    }
  },
  quarterOrder: ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12']
};

/*
const initialState = {
  classes: [
    [
      { id: 1, dept: "COM SCI", name: "1" },
      { id: 2, dept: "COM SCI", name: "31" },
      { id: 3, dept: "ENGCOMP", name: "3" },
      { id: 4, dept: "MATH", name: "31A" }
    ],
    [
      { id: 1, dept: "COM SCI", name: "32" },
      { id: 2, dept: "MATH", name: "31B" },
      { id: 3, dept: "PHYSICS", name: "1A" }
    ],
    [
      { id: 1, dept: "COM SCI", name: "33" },
      { id: 2, dept: "MATH", name: "32A" },
      { id: 3, dept: "PHYSICS", name: "1B" }
    ],
    [],
    [
      { id: 1, dept: "COM SCI", name: "35L" },
      { id: 2, dept: "COM SCI", name: "M51A" },
      { id: 3, dept: "MATH", name: "32B" }
    ],
    [
      { id: 1, dept: "MATH", name: "33A" },
      { id: 2, dept: "MATH", name: "61" },
      { id: 3, dept: "PHYSICS", name: "1C" },
      { id: 4, dept: "PHYSICS", name: "4AL" }
    ],
    [
      { id: 1, dept: "COM SCI", name: "111" },
      { id: 2, dept: "COM SCI", name: "M152A" },
      { id: 3, dept: "MATH", name: "33B" },
      { id: 4, dept: "EPS SCI", name: "15" }
    ],
    [],
    [
      { id: 1, dept: "COM SCI", name: "118" },
      { id: 2, dept: "COM SCI", name: "180" },
      { id: 3, dept: "LING", name: "20" },
      { id: 4, dept: "CHEM", name: "20A" }
    ],
    [
      { id: 1, dept: "COM SCI", name: "131" },
      { id: 2, dept: "COM SCI", name: "M151B" },
      { id: 3, dept: "HIST", name: "1C" },
      { id: 4, dept: "STATS", name: "100A" }
    ],
    [
      { id: 1, dept: "COM SCI", name: "181" },
      { id: 2, dept: "COM SCI", name: "M117" },
      { id: 3, dept: "SLAVC", name: "90" },
      { id: 4, dept: "MATH", name: "115A" }
    ],
    [],
    [
      { id: 1, dept: "COM SCI", name: "130" },
      { id: 2, dept: "COM SCI", name: "161" },
      { id: 3, dept: "PSYCH", name: "15" },
      { id: 4, dept: "CHEM", name: "20B" }
    ],
    [
      { id: 1, dept: "COM SCI", name: "143" },
      { id: 2, dept: "COM SCI", name: "174A" },
      { id: 3, dept: "MATH", name: "131A" }
    ],
    [
      { id: 1, dept: "COM SCI", name: "168" },
      { id: 2, dept: "CHEM", name: "30A" },
      { id: 3, dept: "MATH", name: "164" },
    ]
  ]
};
*/
const classesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RELOAD_CLASS:
      console.log("reload action.result", action.result);
      let {classes, search} = action.result;
      return {
        ...state,
        classes: classes,
        quarters: {
          ...state.quarters,
          search: search
        }
      };
    case actionTypes.LOAD_CLASS:
      console.log(action.result)
      classes = action.result.classes;
      search = action.result.search;
      console.log("c", classes, search);
      return {
        ...state,
        classes: classes,
        quarters: {
          ...state.quarters,
          search: search
        }
      };
    case actionTypes.DROP_CLASS:
      const {destination, source, draggableId} = action.result;
      if (!destination){
        return state;
      }

      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return state;
      }

      const start = state.quarters[source.droppableId];
      const finish = state.quarters[destination.droppableId];

      if (start === finish){
        const newClassIds = Array.from(start.classIds);
        newClassIds.splice(source.index, 1);
        newClassIds.splice(destination.index, 0, draggableId);

        const newQuarter = {
          ...start,
          classIds: newClassIds,
        };

        const newState = {
          ...state,
          quarters: {
            ...state.quarters,
            [newQuarter.id]: newQuarter,
          },
        };
        return newState;
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
        ...state,
        quarters: {
          ...state.quarters,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
      return newState;
    case actionTypes.REMOVE_CLASS:
      let newQuarter = state.quarters[action.classData.quarterID];
      newQuarter.classIds = newQuarter.classIds.filter(c => c !== action.classData.classID);
      return {
        ...state,
        quarters: {
          ...state.quarters,
          [action.classData.quarterID] : newQuarter
        }
      };
    default:
      return state;
  }
};

export default classesReducer;
