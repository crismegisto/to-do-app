import { initialData } from 'slices/currentListSlice';

import { filterByLabel } from './tasksFilters';

describe('format text', () => {
  test('filter task', () => {
    expect(filterByLabel(initialData, 'family')).toEqual([initialData[0]]);
    expect(filterByLabel(initialData, 'school')).toEqual([]);
  });
});
