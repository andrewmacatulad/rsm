import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";

import "semantic-ui-css/semantic.min.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import "./index.css";
import App from "./layout/App";
import { configureStore } from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";
import ScrollToTop from "./common/ScrollToTop";

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
      <ScrollToTop>
        <ReduxToastr
          timeOut={4000}
          preventDuplicates
          newestOnTop={false}
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
