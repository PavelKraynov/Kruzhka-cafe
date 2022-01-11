import React from "react";
import ReactDOM from "react-dom";
import Root from "./root/root";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";

const target = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  target
);
