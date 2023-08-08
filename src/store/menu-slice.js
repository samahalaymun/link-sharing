import { createSlice } from "@reduxjs/toolkit";


const menuSlice = createSlice({
  name: "platformMenu",
  initialState: {
    isOpen: false,
    index: 1,
    selectedMenuItems: [],
  },
  reducers: {
    toggleMenuOpen(state, action) {
      state.index = action.payload;
      state.isOpen = !state.isOpen;
    },
    onSelectMenuItem(state, action) {
      const existingItem = state.selectedMenuItems.find(
        (item) => item.menuIndex === action.payload.index
      );
      if (existingItem) {
        existingItem.id = action.payload.item.id;
        existingItem.value = action.payload.item.value;
        existingItem.icon = action.payload.item.icon;
        existingItem.background = action.payload.item.background;
      } else {
        state.selectedMenuItems.push({
          id:action.payload.item.id,
          menuIndex: action.payload.index,
          value: action.payload.item.value,
          icon: action.payload.item.icon,
          background: action.payload.item.background,
        });
      }
    },
    changeMenuIndex(state, action) {
      state.index = action.payload;
    },
  },
});

export const menuActions = menuSlice.actions;

export default menuSlice;