import React from "react";
import ReactDOM from "react-dom";
import Bransome from "./Bransome";
import store from "./redux-Moduls/Store";
import "./css/index.css";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Bransome />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
