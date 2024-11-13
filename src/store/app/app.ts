import { combineReducers } from "redux";
import authReducer from "./auth/auth-slices";

const appReducers = combineReducers({
  auth: authReducer,
});

export default appReducers;
