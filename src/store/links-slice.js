import { createSlice } from "@reduxjs/toolkit";

const linksSlice = createSlice({
  name: "links",
  initialState: {
    updateLinks: [],
    previewLinks: [],
  },
  reducers: {
    addToUpdateLinks(state, action) {
      const existingItem = state.updateLinks.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.id = action.payload.id;
        existingItem.value = action.payload.value;
        existingItem.icon = action.payload.icon;
        existingItem.background = action.payload.background;
        existingItem.link = action.payload.link;
      } else { 
        const newUpdateLink = action.payload;
        state.updateLinks.push({
          id:newUpdateLink.id,
          index: newUpdateLink.index,
          value: newUpdateLink.value,
          icon: newUpdateLink.icon,
          background: newUpdateLink.background,
          link: newUpdateLink.link,
        });
      }
    },
    removeFromUpdateLinks(state, action) {
      let index = state.updateLinks.findIndex(
        (item, index) => index === action.payload
      );
      state.updateLinks.splice(index, 1);
    },
    addToPreviewLinks(state, action) {
      state.previewLinks=action.payload;
    },
    removeFromPreviewLinks(state, action) {},
  },
});

export const linksActions = linksSlice.actions;

export default linksSlice;
