import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Status } from "../../../types/status";
import { RootState } from "../..";

export type AuthStore = {
  authenticated: boolean;
  status: Status;
};

const initialState: AuthStore = {
  authenticated: false,
  status: {
    code: -1,
    loading: false,
    msg: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setInitialState: (state) => {
      state.status = initialState.status;
      state.authenticated = initialState.authenticated;
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
  },
});

export default authSlice.reducer;

export const { setInitialState, setAuthenticated } = authSlice.actions;

export const getAuthStatus = (state: RootState) => state.app.auth;
