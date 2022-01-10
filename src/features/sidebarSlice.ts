/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  width: 'w-16',
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isOpen = true;
      state.width = 'w-56';
      console.log(state.width);
    },

    closeSidebar: (state) => {
      state.isOpen = false;
      state.width = 'w-16';
      console.log(state.width);
    },
  },
});

export default sidebarSlice.reducer;

export const { openSidebar, closeSidebar } = sidebarSlice.actions;
