import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import currentListReducer from 'slices/currentListSlice';

//import Reactotron from './config/reactotronConfig';

const rootReducer = combineReducers({
  tasks: currentListReducer
});

export const store = configureStore({
  reducer: {
    tasks: currentListReducer
  }
  // enhancers: [Reactotron.createEnhancer!()]
});

export const setupStore = (preloadedState?: PreloadedState<MockRootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState
  });

export type RootState = ReturnType<typeof store.getState>;
export type MockRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
