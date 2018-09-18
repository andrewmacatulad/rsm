import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import authReducer from "../auth/authReducer";
import modalReducer from "../components/modals/modalReducer";
import equipmentReducer from "../components/equipment/equipmentReducer";
import asyncReducer from "../async/asyncReducer";
import partyReducer from "../components/party/partyReducer";
import friendsReducer from "../components/friends/friendsReducer";
import questReducer from "../components/quests/questReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  equipments: equipmentReducer,
  modals: modalReducer,
  async: asyncReducer,
  party: partyReducer,
  toastr: toastrReducer,
  friends: friendsReducer,
  quests: questReducer
});

export default rootReducer;
