import React from 'react';
import { screen, fireEvent } from '@testing-library/react-native';

import { renderWithProvider, initialStoreState } from '../../../utils/test/redux';
import Home from './index';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate
    })
  };
});

describe('<CustomButton /> Tests', () => {
  it('match snapshot and button name', async () => {
    renderWithProvider(<Home />, {
      preloadedState: initialStoreState
    });

    expect(screen.toJSON()).toMatchSnapshot();

    const nameTask = screen.getByText('Mock');
    expect(nameTask).toBeOnTheScreen();

    const deleteButton = screen.getAllByTestId('deleteButton');
    fireEvent.press(deleteButton[0]);

    expect(nameTask).not.toBeOnTheScreen();
  });
});
