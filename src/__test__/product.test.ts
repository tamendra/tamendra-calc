import { product } from '../index';

describe('product function', () => {
  test('should return the product of an array of numbers', () => {
    expect(product([1, 2, 3, 4, 5])).toBe(120);
    expect(product([1, 2, -3, 4, 5])).toBe(-120);
  });

  test('should throw an error for non-array input', () => {
    expect(() => product(123 as any)).toThrow('Invalid Input');
    expect(() => product('123' as any)).toThrow('Invalid Input');
    expect(() => product(null as any)).toThrow('Invalid Input');
  });

  test('should throw an error for array with non-number elements', () => {
    expect(() => product([1, '2', 3] as any)).toThrow('Invalid Input 2');
    expect(() => product([1, {}, 3] as any)).toThrow('Invalid Input [object Object]');
  });

  test('should throw an error for array with no elements', () => {
    expect(() => product([])).toThrow('Invalid Input');
  });
});
