import {
  SET_CURRENT_USER,
  REMOVE_CURRENT_USER,
  LOADING_USER,
  LOAD_FAIL,
  ADD_EXP_USER,
  FETCH_IMAGES,
  LEVEL_RESTRICT
} from "./authActions";

const initialState = {
  user: false,
  level: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      // return { ...action.payload };
      //   return action.user;
      return { ...state, user: action.payload || { ...state, user: false } };
    // case LOAD_SUCCESS:
    // return { ...state, robots: action.payload, isPending: false };
    case LOADING_USER:
      return { ...state, user: true };
    case LOAD_FAIL:
      return { ...state, error: "Error" };
    case REMOVE_CURRENT_USER:
      return { user: false };
    case FETCH_IMAGES:
      return { ...state, images: action.payload };
    case LEVEL_RESTRICT:
      return { ...state, level: action.payload };
    default:
      return state;
  }
}
