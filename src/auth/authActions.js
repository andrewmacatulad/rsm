// export const socialLogin = selectedProvider => async (
//   dispatch,
//   getState,
//   { getFirebase }
// ) => {
//   const firebase = getFirebase();

//   try {
//     let user = await firebase.login({
//       provider: selectedProvider,
//       type: "popup"
//     });
//     console.log(user);
//     if (user.additionalUserInfo.isNewUser) {
//       await firebase.set(`users/${user.user.uid}`, {
//         displayName: user.profile.displayName,
//         photoURL: user.profile.avatarUrl
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
import axios from "axios";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "../async/asyncActions";

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const LOADING_USER = "LOADING_USER";
export const LOAD_FAIL = "LOAD_FAIL";
export const ADD_EXP_USER = "ADD_EXP_USER";
export const FETCH_IMAGES = "FETCH_IMAGES";
export const LEVEL_RESTRICT = "LEVEL_RESTRICT";

// const setUser = user => ({ type: SET_CURRENT_USER, user });
// const removeUser = () => ({ type: REMOVE_CURRENT_USER });

// export const setUser = () => async dispatch => {
//   const res = await axios.get("/api/me");
//   console.log(res.data);
//   dispatch({ type: SET_CURRENT_USER, payload: res.data });
// };

export const removeUser = () => async dispatch => {
  const res = await axios.get("/api/logout");

  dispatch({ type: REMOVE_CURRENT_USER });
};

export const setUser = () => async dispatch => {
  dispatch(asyncActionStart());

  try {
    const res = await axios.get("/api/me");
    dispatch({
      type: SET_CURRENT_USER,
      payload: res.data
    });
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
  }
};

export const addExp = exp => async dispatch => {
  try {
    const res = await axios.put("/api/level", { experience: exp });
    dispatch({
      type: SET_CURRENT_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOAD_FAIL
    });
  }
};

// export const submitBlog = file => async dispatch => {
//   const uploadConfig = await axios.get("/api/upload");
//   console.log(file);
//   const upload = await axios.put(uploadConfig.data.url, file, {
//     headers: {
//       "Content-Type": file.type
//     }
//   });

//   // const res = await axios.post("/api/blogs", {
//   //   ...values,
//   //   imageUrl: uploadConfig.data.key
//   // });

//   // history.push("/blogs");
//   // dispatch({ type: FETCH_BLOG, payload: res.data });
// };
export const submitBlog = file => async dispatch => {
  const uploadConfig = await axios.get("/api/upload");
  console.log(uploadConfig);
  const upload = await axios.put(uploadConfig.data.url, file, {
    headers: {
      "Content-Type": file.type
    }
  });
  console.log(
    "Name",
    uploadConfig.data.key,
    "Size",
    file.size,
    "URL",
    uploadConfig.data.key
  );

  const res = await axios.post("/api/images", {
    name: uploadConfig.data.key,
    size: file.size,
    url: uploadConfig.data.key
  });

  // history.push("/blogs");
  // dispatch({ type: FETCH_BLOG, payload: res.data });
};

export const deleteImage = () => async dispatch => {
  const deleteImage = await axios.get("/api/upload");
};

export const getImages = () => async dispatch => {
  try {
    const images = await axios.get("/api/images");
    dispatch({ type: FETCH_IMAGES, payload: images.data });
  } catch (err) {
    dispatch({
      type: LOAD_FAIL
    });
  }
};

export const setProfilePicture = photo => async dispatch => {
  try {
    const profilePicture = await axios.put("/api/profile_picture", { photo });
  } catch (err) {
    dispatch({
      type: LOAD_FAIL
    });
  }
};

export const testLevelSecure = () => async dispatch => {
  try {
    dispatch(asyncActionStart());
    const test = await axios.get("/api/test");
    console.log(test);
    dispatch({
      type: LEVEL_RESTRICT,
      payload: test.data
    });
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
    console.log(err.data);
  }
};

// export const setMainPhoto = photo => async (dispatch, getState) => {
//   dispatch(asyncActionStart());
//   const firestore = firebase.firestore();
//   const user = firebase.auth().currentUser;
//   const today = new Date(Date.now());
//   let userDocRef = firestore.collection("users").doc(user.uid);
//   let eventAttendeeRef = firestore.collection("event_attendee");

//   try {
//     // return await firebase.updateProfile({
//     //   photoURL: photo.url
//     // });
//     let batch = firestore.batch();

//     await batch.update(userDocRef, {
//       photoURL: photo.url
//     });
//     // update all the photo
//     let eventQuery = await eventAttendeeRef
//       .where("userUid", "==", user.uid)
//       .where("eventDate", ">", today);

//     // snapshot from the where clauses in the eventQuery
//     let eventQuerySnap = await eventQuery.get();
//     // now loop to get the values

//     for (let i = 0; i < eventQuerySnap.docs.length; i++) {
//       let eventDocRef = await firestore
//         .collection("events")
//         .doc(eventQuerySnap.docs[i].data().eventId);
//       // check if the host id is equal to user id
//       let event = await eventDocRef.get();
//       if (event.data().hostUid === user.uid) {
//         batch.update(eventDocRef, {
//           hostPhotoURL: photo.url,
//           [`attendees.${user.uid}.photoURL`]: photo.url
//         });
//       } else {
//         batch.update(eventDocRef, {
//           [`attendees.${user.uid}.photoURL`]: photo.url
//         });
//       }
//     }
//     // all the update that need to be applied
//     console.log(batch);
//     await batch.commit();
//     dispatch(asyncActionFinish());
//   } catch (error) {
//     console.log(error);
//     dispatch(asyncActionError());
//     throw new Error("Problem setting main photo");
//   }
// };
