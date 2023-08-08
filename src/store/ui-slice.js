import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    Notification: null,
  },
  reducers: {
    showNotification(state, action) {
      state.Notification = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      };
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
