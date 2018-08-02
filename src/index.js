import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./layout/App";
import { configureStore } from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();

// const render = () => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>,
//     document.getElementById("root")
//   );
// };

// if (module.hot) {
//   module.hot.accept("./layout/App", () => {
//     setTimeout(render);
//   });
// }

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
