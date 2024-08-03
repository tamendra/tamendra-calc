export function sum(data: number[]): number {
  if (!Array.isArray(data) || data.length <= 0) {
    throw new Error('Invalid Input');
  }

  let sum = 0;
  for (const num of data) {
    if (typeof num !== 'number') {
      throw new Error(`Invalid Input ${num}`);
    }
    sum += num;
  }

  return sum;
}
