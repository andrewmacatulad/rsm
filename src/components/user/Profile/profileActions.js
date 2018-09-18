import axios from "axios";
import { toastr } from "react-redux-toastr";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "../../../async/asyncActions";
import { setUser } from "../../../auth/authActions";

export const FETCH_PROFILE_PHOTO = "FETCH_PROFILE_PHOTO";

export const addProfilePhoto = (photo, type) => async dispatch => {
  dispatch(asyncActionStart());
  console.log(photo);
  try {
    const uploadConfig = await axios.get("/api/upload");

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
    const profilePicture = await axios.put("/api/profile_picture", {
      photo: `https://s3-ap-southeast-1.amazonaws.com/test-social-123/${
        res.data.url
      }`
    });
    // const addEquipment = await axios.put("/api/set_equipment", {
    //   photo: `https://s3-ap-southeast-1.amazonaws.com/test-social-123/${
    //     res.data.url
    //   }`,
    //   type
    // });
    dispatch(setUser());
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
  }
};

// export const addProfilePhoto = (photo, type) => async dispatch => {

export const editAccountProfile = values => async dispatch => {
  const {
    email,
    city,
    gender,
    name,
    state,
    year,
    zip,
    day,
    month,
    street
  } = values;

  try {
    const editProfile = await axios.patch("/api/user/edit", {
      email,
      name,
      gender,
      street,
      city,
      state,
      zip,
      birthYear: year,
      birthDate: `${month}-${day}`
    });
    toastr.success("Success", "You finish the quest successfully");
    dispatch(setUser());

    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
  }
};
