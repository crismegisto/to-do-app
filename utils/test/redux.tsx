import React from 'react';
import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { configureStore, PreloadedState, Store } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react-native';
import { RootState } from 'src/store';
import currentListReducer from 'slices/currentListSlice';

export const initialStoreState = {
  tasks: {
    currentList: [
      {
        id: 1,
        name: 'Mock',
        description: '',
        completed: false
      }
    ]
  }
};

interface reduxProps extends RenderOptions {
  preloadedState?: PreloadedState<RootState>;
  store?: Store;
}

export const renderWithProvider = (
  component: ReactElement,
  {
    preloadedState = initialStoreState,
    store = configureStore({ reducer: { tasks: currentListReducer }, preloadedState }),
    ...renderOptions
  }: reduxProps = {}
) => {
  const wrapper = ({ children }: { children: ReactNode }): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(component, { wrapper, ...renderOptions }) };
};
