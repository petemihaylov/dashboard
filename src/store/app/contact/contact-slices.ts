import { createSelector, createSlice } from "@reduxjs/toolkit";
import { submitContactForm } from "./contact-thunk";
import { RootState } from "../..";
import { Status } from "../../../types/status";

interface ContactState {
  status: Status;
}

const initialState: ContactState = {
  status: {
    code: -1,
    loading: false,
    msg: null,
  },
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setInitialState: (state) => {
      state.status = initialState.status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.status.loading = true;
        state.status.msg = null;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.status.loading = false;
        state.status.code = 200;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.status.loading = false;
        state.status.code = 400;
        state.status.msg = action.error.message as string;
      });
  },
});

export const { setInitialState } = contactSlice.actions;

export default contactSlice.reducer;

export const getContactState = createSelector(
  [(state: RootState) => state.app.contact.status],
  (status) => status
);
