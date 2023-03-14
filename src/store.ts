import { configureStore } from '@reduxjs/toolkit';
import currentListReducer from 'slices/currentListSlice';

import Reactotron from './config/reactotronConfig';

export const store = configureStore({
  reducer: {
    tasks: currentListReducer
  },
  enhancers: [Reactotron.createEnhancer!()]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
