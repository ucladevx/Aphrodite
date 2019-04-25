import * as actionTypes from "../Actions/classesAction";
const initialState = {
  classes: {
    'c1' : { id: 1, dept: "COM SCI", name: "1" },
    'c2' : { id: 2, dept: "COM SCI", name: "31" },
    'c3' : { id: 3, dept: "ENGCOMP", name: "3" },
    'c4' : { id: 4, dept: "MATH", name: "31A" }
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
      classIds: ['c4']
    },
    'q3': {
      id: 'q3',
      title: "To Do",
      classIds: []
    },
    'q4': {
      id: 'q4',
      title: "To Do",
      classIds: ['c3']
    }
  },
  quarterOrder: ['q1', 'q2', 'q3', 'q4']
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
