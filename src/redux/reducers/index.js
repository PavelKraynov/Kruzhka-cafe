import { combineReducers } from "redux";
import form_reducer from "./form_reducer";
const createRootReducers = () =>
  combineReducers({
    form_reducer,
  });

export default createRootReducers;
