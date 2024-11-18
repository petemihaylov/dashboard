import { combineReducers } from "redux";
import contactReducer from "./contact/contact-slices";

const appReducers = combineReducers({
  contact: contactReducer,
});

export default appReducers;
