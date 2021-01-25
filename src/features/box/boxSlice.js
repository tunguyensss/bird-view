import { createSlice } from '@reduxjs/toolkit';

export const boxSlice = createSlice({
  name: 'box',
  initialState: {},
  reducers: {
    // add reducers here
    changes: (state) => {
      state.value += 1;
    },
  },
});

export const { changes } = boxSlice.actions;
export default boxSlice.reducer;
