export function product(data: number[]): number {
  if (!Array.isArray(data) || data.length <= 0) {
    throw new Error('Invalid Input');
  }

  let product = 1;
  for (const num of data) {
    if (typeof num !== 'number') {
      throw new Error(`Invalid Input ${num}`);
    }
    product *= num;
  }

  return product;
}
