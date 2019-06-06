import * as actionTypes from "../Actions/formAction";
const initialState = {
    name: "",
    major: "",
    year: ""
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FORM:
        return action.form;
    default:
        return state;
  }
};

export default formReducer;
