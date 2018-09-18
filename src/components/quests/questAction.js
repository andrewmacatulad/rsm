import axios from "axios";
import { toastr } from "react-redux-toastr";

import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "../../async/asyncActions";

export const QUEST_LIST = "QUEST_LIST";

export const getQuests = () => async dispatch => {
  dispatch(asyncActionStart());

  try {
    const quest = await axios.get("/api/quests");
    dispatch({
      type: QUEST_LIST,
      payload: quest.data
    });

    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
  }
};

export const filterQuests = type => async dispatch => {
  dispatch(asyncActionStart());

  console.log(type);
  try {
    const quest = await axios.get(`/api/quests/${type}`);
    dispatch({
      type: QUEST_LIST,
      payload: quest.data
    });

    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
  }
};

export const createQuests = (
  questTitle,
  questObjective,
  questType
) => async dispatch => {
  dispatch(asyncActionStart());

  try {
    const quests = await axios.post("/api/quests", {
      questTitle,
      questObjective,
      questType
    });
    console.log(quests);

    dispatch(getQuests());
    toastr.success("Success", "Quest Added");
    dispatch(asyncActionFinish());
  } catch (err) {
    toastr.error("Error", "Fail to add quest");
    dispatch(asyncActionError());
  }
};

export const finishQuest = questId => async dispatch => {
  dispatch(asyncActionStart());

  try {
    const quest = await axios.patch("/api/quests", {
      questId
    });
    console.log(quest);
    dispatch(getQuests());
    toastr.success("Success", "You finish the quest successfully");
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
  }
};
