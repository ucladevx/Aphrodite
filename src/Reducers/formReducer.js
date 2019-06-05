import * as actionTypes from "../Actions/formAction";
const initialState = {
    name: "",
    major: "",
    year: ""
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FORM:
        const [n, m, y] = action.form;
        return {
            name: n,
            major: m,
            year: y
        };
    default:
        return state;
  }
};

export default formReducer;
