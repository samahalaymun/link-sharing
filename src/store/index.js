import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menu-slice";
import linksSlice from "./links-slice";
import uiSlice from "./ui-slice";
import profileSlice from "./profile-slice";


const store = configureStore({
  reducer: {
    menu:menuSlice.reducer,
    links:linksSlice.reducer,
    ui:uiSlice.reducer,
    profile:profileSlice.reducer
  },
});

export default store;