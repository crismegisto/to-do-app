import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import currentListReducer from 'slices/currentListSlice';

const rootReducer = combineReducers({
  tasks: currentListReducer
});

export const setupStore = (preloadedState?: PreloadedState<MockRootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState
  });

export type MockRootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
