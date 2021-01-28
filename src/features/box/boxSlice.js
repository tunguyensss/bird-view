import { createSlice } from '@reduxjs/toolkit';

export const boxSlice = createSlice({
  name: 'box',
  initialState: {
    isRotate: true,
  },
  reducers: {
    toggle: (state) => {
      state.isRotate = !state.isRotate;
    },
  },
});

// export actions
export const { toggle } = boxSlice.actions;

// export default value
export const defaultRotateState = (state) => state.box.isRotate;

// export reducer
export default boxSlice.reducer;
