import { sum } from '../index';

describe('sum function', () => {
  test('should return the sum of an array of numbers', () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
  });

  test('should throw an error for non-array input', () => {
    expect(() => sum(123 as any)).toThrow('Invalid Input');
    expect(() => sum('123' as any)).toThrow('Invalid Input');
    expect(() => sum(null as any)).toThrow('Invalid Input');
  });

  test('should throw an error for array with non-number elements', () => {
    expect(() => sum([1, '2', 3] as any)).toThrow('Invalid Input 2');
    expect(() => sum([1, {}, 3] as any)).toThrow('Invalid Input [object Object]');
  });

  test('should throw an error for array with no elements', () => {
    expect(() => sum([])).toThrow('Invalid Input');
  });
});
