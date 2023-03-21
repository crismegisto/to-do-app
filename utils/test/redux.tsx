import React from 'react';
import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PreloadedState } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react-native';
import { initialData } from 'slices/currentListSlice';

import type { MockRootState, AppStore } from './store';
import { setupStore } from './store';

export const initialStoreState = {
  tasks: {
    currentList: initialData
  }
};

interface reduxProps extends RenderOptions {
  preloadedState?: PreloadedState<MockRootState>;
  store?: AppStore;
}

export const renderWithProvider = (
  component: ReactElement,
  { preloadedState = {}, store = setupStore(preloadedState), ...renderOptions }: reduxProps = {}
) => {
  const wrapper = ({ children }: { children: ReactNode }): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(component, { wrapper, ...renderOptions }) };
};
