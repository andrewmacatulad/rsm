import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

const authReducer = (state = {}, action) => {
  return {};
};

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  test: authReducer
});

export default rootReducer;
