import React from 'react';
import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { configureStore, PreloadedState, Store } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react-native';
import { setupStore } from 'src/store';
import type { MockRootState, AppStore } from 'src/store';

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
