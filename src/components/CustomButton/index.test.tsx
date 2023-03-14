import React from 'react';
import { screen } from '@testing-library/react-native';

import { renderWithProvider, initialStoreState } from '../../../utils/test/redux';
import CustomButton from './index';

describe('<CustomButton /> Tests', () => {
  it('match snapshot and button name', () => {
    const buttonName = 'Add Task';

    renderWithProvider(<CustomButton name={buttonName} onSubmit={() => jest.fn()} />, {
      preloadedState: initialStoreState
    });

    expect(screen.toJSON()).toMatchSnapshot();
    expect(screen.getByText('Add Task')).toBeOnTheScreen();
  });
});
