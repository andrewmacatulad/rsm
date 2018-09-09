import axios from "axios";
import { toastr } from "react-redux-toastr";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "../../async/asyncActions";

export const USER_LIST = "USER_LIST";
export const FRIENDS_LIST = "FRIENDS_LIST";

export const getUserList = () => async dispatch => {
  try {
    const users = await axios.get("/api/users");
    dispatch({
      type: USER_LIST,
      payload: users.data
    });

    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
  }
};

export const getFriendsList = () => async dispatch => {
  try {
    const friends = await axios.get("/api/friends");
    dispatch({
      type: FRIENDS_LIST,
      payload: friends.data
    });

    console.log(friends);
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
  }
};

export const addFriend = friendsId => async dispatch => {
  let friends;
  try {
    friends = await axios.post("/api/friends", { friendsId });
    if (friends.data.success) {
      toastr.success("Success", "You are now friends");
    } else {
      toastr.error("Error", `${friends.data.error}`);
    }

    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
  }
};
