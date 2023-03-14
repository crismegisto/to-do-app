import { formatText } from './stringUtils';

describe('format text', () => {
  test('with alphanumeric characters', () => {
    expect(formatText('He?ll#o')).toBe('Hello');
  });
  test('with alphanumeric characters and blank spaces', () => {
    expect(formatText('    He?ll#o ')).toBe('Hello');
  });
});
