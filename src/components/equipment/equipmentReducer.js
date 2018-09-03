import { LOAD_FAIL, FETCH_EQUIPS } from "./equipmentAction";

const initialState = {
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_FAIL:
      return { ...state, error: "Error", isLoading: false };
    case FETCH_EQUIPS:
      return { ...state, equips: action.payload };

    default:
      return state;
  }
}
