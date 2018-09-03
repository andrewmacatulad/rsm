import { combineReducers } from "redux";
import authReducer from "../auth/authReducer";
import modalReducer from "../components/modals/modalReducer";
import equipmentReducer from "../components/equipment/equipmentReducer";
import asyncReducer from "../async/asyncReducer";
import partyReducer from "../components/party/partyReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  equipments: equipmentReducer,
  modals: modalReducer,
  async: asyncReducer,
  party: partyReducer
});

export default rootReducer;
