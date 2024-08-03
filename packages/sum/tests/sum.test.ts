import { sum } from '../src';

describe('sum function', () => {
  it('should return the sum of an array of numbers', () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });

  it('should throw an error for non-array input', () => {
    expect(() => sum(null as any)).toThrow('Invalid Input');
  });

  it('should throw an error for empty array', () => {
    expect(() => sum([])).toThrow('Invalid Input');
  });

  it('should throw an error for array with non-number elements', () => {
    expect(() => sum([1, '2' as any, 3])).toThrow('Invalid Input 2');
  });
});
