import * as actionTypes from "../Actions/classesAction";

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

const classesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REMOVE_CLASS:
      let newClasses = state.classes;
      newClasses[action.classData.index] = state.classes[
        action.classData.index
      ].filter(course => course.id !== action.classData.id);
      console.log(newClasses);
      return {
        ...state,
        classes: newClasses
      };
    default:
      return state;
  }
};

export default classesReducer;
