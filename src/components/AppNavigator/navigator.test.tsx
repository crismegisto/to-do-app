import * as React from 'react';
import { screen, fireEvent } from '@testing-library/react-native';
import { setupStore } from 'src/store';
import { addTask, removeTask, editTask } from 'src/slices/currentListSlice';

import { renderWithProvider } from '../../../utils/test/redux';
import AppNavigator from './index';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const component = <AppNavigator />;

beforeEach(() => {
  const store = setupStore();
  store.dispatch(
    addTask({
      id: 2,
      name: 'Mock2',
      description: '',
      completed: false
    })
  );
  store.dispatch(editTask({ id: 1, name: 'Example2' }));

  renderWithProvider(component, { store });
});

afterEach(() => {
  const store = setupStore();
  store.dispatch(removeTask(2));
  store.dispatch(editTask(1));

  renderWithProvider(component, { store });
});

describe('Testing react navigation', () => {
  test('find Add Task button', async () => {
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
    expect(screen.getAllByTestId('name-list')).toHaveLength(2);
  });

  test('navigation to Detail from task', async () => {
    const checkBox = screen.getAllByTestId('checkBox');
    const button = screen.getAllByTestId('name-list');

    fireEvent(checkBox[0], 'valueChange');
    fireEvent(button[0], 'press');

    const title = await screen.findByText('Name');
    const name = await screen.findByText('Example2');

    expect(title).toBeOnTheScreen();
    expect(name).toBeOnTheScreen();
  });
});
