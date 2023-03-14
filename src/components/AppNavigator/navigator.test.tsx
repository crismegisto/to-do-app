import * as React from 'react';
import { screen, fireEvent } from '@testing-library/react-native';

import { renderWithProvider, initialStoreState } from '../../../utils/test/redux';
import AppNavigator from './index';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const component = <AppNavigator />;

beforeEach(() => {
  renderWithProvider(component, {
    preloadedState: initialStoreState
  });
});

describe('Testing react navigation', () => {
  test('page contains the header and 10 items', async () => {
    const button = await screen.findByText('Add Task');
    expect(button).toBeOnTheScreen();
  });
  test('navigation to Detail', async () => {
    const button = await screen.findByText('Add Task');

    fireEvent(button, 'press');
    const title = await screen.findByText('Name');

    expect(title).toBeOnTheScreen();
  });
  test('taskCard', () => {
    expect(screen.getAllByTestId('name-list')).toHaveLength(1);
  });

  test('navigation to Detail from task', async () => {
    const button = screen.getByTestId('name-list');

    fireEvent(button, 'press');
    const title = await screen.findByText('Name');

    expect(title).toBeOnTheScreen();
  });
});
