import axios from "axios";
import { toastr } from "react-redux-toastr";

import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "../../async/asyncActions";
import { setUser } from "../../auth/authActions";

export const PARTY_LIST = "PARTY_LIST";

export const createParty = (title, description) => async dispatch => {
  dispatch(asyncActionStart());

  try {
    const party = await axios.post("/api/party", {
      title,
      description
    });
    console.log(party);
    dispatch(setPartyList());
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
  }
};

export const joinParty = partyId => async dispatch => {
  dispatch(asyncActionStart());

  try {
    const party = await axios.patch("/api/party_join", {
      partyId
    });
    console.log(party);
    dispatch(setPartyList());
    toastr.success("Success", "You joined the party successfully");
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
  }
};

export const deleteParty = partyId => async dispatch => {
  let party;
  dispatch(asyncActionStart());

  console.log(partyId);
  // const message = cancelled
  // ? "Are you sure you want to cancel the event?"
  // : "This will will reactivate the event - are you sure?";

  try {
    toastr.confirm("Are you sure you want to leave the group", {
      onOk: async () => {
        party = await axios.delete(`/api/party_leave/${partyId}`);
        console.log(party);
        toastr.success("Success", "You successfully leave the group");

        dispatch(setPartyList());
      }
    });
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
  }
};

export const setPartyList = () => async dispatch => {
  try {
    const party = await axios.get("/api/party");
    dispatch({
      type: PARTY_LIST,
      payload: party.data
    });
    dispatch(setUser());
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
  }
};
