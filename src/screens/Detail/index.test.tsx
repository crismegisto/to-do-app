import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react-native';

import { initialStoreState, renderWithProvider } from '../../../utils/test/redux';
import TaskDetail from './index';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn()
    }),
    useRoute: () => ({ params: { id: 1 } })
  };
});

beforeEach(() => {
  renderWithProvider(<TaskDetail />, {
    preloadedState: initialStoreState
  });
});

describe('testing Detail', () => {
  test('snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('edit task', () => {
    const button = screen.getByText('Save');
    expect(button).toBeOnTheScreen();
  });
});
