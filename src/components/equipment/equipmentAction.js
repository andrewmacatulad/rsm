import axios from "axios";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "../../async/asyncActions";
import { setUser } from "../../auth/authActions";

export const LOAD_FAIL = "LOAD_FAIL";
export const FETCH_EQUIPS = "FETCH_EQUIPS";

export const addEquipPhoto = (photo, type) => async dispatch => {
  dispatch(asyncActionStart());
  console.log(photo);
  try {
    const uploadConfig = await axios.get("/api/equip_upload");
    console.log(uploadConfig.data.url);
    const upload = await axios.put(uploadConfig.data.url, photo, {
      headers: {
        "Content-Type": photo.type
      }
    });

    const res = await axios.post("/api/equipment", {
      name: uploadConfig.data.key,
      type,
      url: uploadConfig.data.key
    });

    console.log(res.data.url);
    const addEquipment = await axios.put("/api/set_equipment", {
      photo: `https://s3-ap-southeast-1.amazonaws.com/test-social-123/${
        res.data.url
      }`,
      type
    });
    dispatch(setUser());
    dispatch(getEquipImages(type));
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
  }
};

export const getEquipImages = type => async dispatch => {
  try {
    dispatch(asyncActionStart());
    const equips = await axios.get(`/api/equipment/${type}`);
    dispatch({ type: FETCH_EQUIPS, payload: equips.data });
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
  }
};

export const setEquipmentPhoto = (photo, type) => async dispatch => {
  dispatch(asyncActionStart());

  try {
    const equipmentPhoto = await await axios.put("/api/set_equipment", {
      photo,
      type
    });
    dispatch(setUser());
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
  }
};
