import { PARTY_LIST } from "./partyAction";

const initialState = {
  party: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PARTY_LIST:
      return { ...state, party: action.payload };
    default:
      return state;
  }
}
