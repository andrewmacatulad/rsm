import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import firebase from "../firebase/firebase";

const rrfConfig = {
  // # where your storing the user profile in this case the users
  userProfile: "users",
  // # For Authentication
  attachAuthIsReady: true,
  // Store profile
  updateProfileOnLogin: false
};

export const configureStore = preloadedState => {
  const middlewares = [thunk.withExtraArgument({ getFirebase })];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  const composedEnhancer = composeWithDevTools(
    ...storeEnhancers,
    reactReduxFirebase(firebase, rrfConfig)
  );

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("../reducers/rootReducer", () => {
        const newRootReducer = require("../reducers/rootReducer").default;
        store.replaceReducer(newRootReducer);
      });
    }
  }

  return store;
};
