import { configureStore } from '@reduxjs/toolkit';
import messageSlice from './message/messageSlice';

const store = configureStore({
  reducer: {
    message: messageSlice,
  },
});

export default store;
