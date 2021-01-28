import { createSlice } from '@reduxjs/toolkit';

export const boxSlice = createSlice({
  name: 'rotate',
  initialState: {
    isRotate: true,
  },
  reducers: {
    // add reducers here
    toggleRotate: (state) => {
      state.isRotate = !this.state.isRotate;
    },
  },
});

export const { toggleRotate } = boxSlice.actions;

export const defaultRotateState = (state) => state.box.isRotate;

export default boxSlice.reducer;
