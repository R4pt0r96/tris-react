import { configureStore } from '@reduxjs/toolkit';
import trisReducer from './TrisSlice';

export const store = configureStore({
  reducer: {
    tris: trisReducer,
  },
});
