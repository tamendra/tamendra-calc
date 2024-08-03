import { product } from '../src';

describe('product function', () => {
  it('should return the product of an array of numbers', () => {
    expect(product([1, 2, 3, 4])).toBe(24);
  });

  it('should throw an error for non-array input', () => {
    expect(() => product(null as any)).toThrow('Invalid Input');
  });

  it('should throw an error for empty array', () => {
    expect(() => product([])).toThrow('Invalid Input');
  });

  it('should throw an error for array with non-number elements', () => {
    expect(() => product([1, '2' as any, 3])).toThrow('Invalid Input 2');
  });
});
