import axios from "axios";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "../../async/asyncActions";

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
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
  }
};

export const deleteParty = partyId => async dispatch => {
  dispatch(asyncActionStart());

  console.log(partyId);
  try {
    const party = await axios.delete(`/api/party_leave/${partyId}`);
    console.log(party);
    dispatch(setPartyList());
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
  }
};

export const setPartyList = () => async dispatch => {
  try {
    const party = await axios.get("/api/party");
    console.log(party);
    dispatch({
      type: PARTY_LIST,
      payload: party.data
    });
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
  }
};
