import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import boxReducer from '../features/box/boxSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    box: boxReducer,
  },
});
