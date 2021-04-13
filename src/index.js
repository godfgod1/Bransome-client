import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Bransome from "./Bransome";
import store from "./redux-Moduls/Store";
import "./css/index.css";
import "./css/navigation.css";
import "./css/welcomeview.css";
import "./css/commentview.css";
import "./css/storyview.css";
import "./css/slideCarousel.css";
import "./css/searchBar.css";
import "./css/footerBar.css";
import "./css/mypage.css";
import "./css/BrandCategoryView.css";
import "./css/IntroduceView.css";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Bransome />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
