import { QUEST_LIST } from "./questAction";

const initialState = {
  quests: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case QUEST_LIST:
      return { ...state, quests: action.payload };
    default:
      return state;
  }
}
