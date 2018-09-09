import { USER_LIST, FRIENDS_LIST } from "./friendsAction";

const initialState = {
  users: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LIST:
      return { ...state, users: action.payload };
    case FRIENDS_LIST:
      return { ...state, friends: action.payload };
    default:
      return state;
  }
}
