import { MODAL_CLOSE, MODAL_OPEN } from "./modalConstants";
// import { createReducer } from "../../app/common/util/reducerUtil";

const initialState = null;

// export const openModal = (state, payload) => {
//   const { modalType, modalProps } = payload;
//   return { modalType, modalProps };
// };

// export const closeModal = (state, payload) => {
//   return null;
// };

// export default createReducer(initialState, {
//   [MODAL_OPEN]: openModal,
//   [MODAL_CLOSE]: closeModal
// });

export default function(state = initialState, action) {
  // const { modalType, modalProps } = payload;
  switch (action.type) {
    case MODAL_OPEN:
      return { ...action.payload };
    case MODAL_CLOSE:
      return null;
    default:
      return state;
  }
}
