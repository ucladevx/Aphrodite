import * as actionTypes from "../Actions/classesAction";

const initialState = {
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
