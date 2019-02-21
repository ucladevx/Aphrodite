import * as actionTypes from './classesActions';

const initialState = {
    classes: [
        [
          { dept: "COM SCI", name: "111" },
          { dept: "COM SCI", name: "131" }, 
          { dept: "COM SCI", name: "35L" }
        ],
        [
          { dept: "COM SCI", name: "118" }, 
          { dept: "COM SCI", name: "180" }, 
          { dept: "COM SCI", name: "M51A" },
          { dept: "PHYSICS", name: "1C" }
        ],
        [
          { dept: "MATH", name: "61" },
          { dept: "MATH", name: "115A" },
          { dept: "COM SCI", name: "M117" }
        ]
    ]
};

// const classesReducer  = (state = initialState, action) => {
//     switch (action.type) {
//       case actionTypes.REMOVE_CLASS:
//         const newState = [...state];
//         newState[action.row] = state.classes[action.row].filter(class => class.id !== action.classId);
//         return {
//           ...state,
//           classes: newState
//         }
//     }
// };

//export default classesReducer;