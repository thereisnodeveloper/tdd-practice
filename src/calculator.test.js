/* eslint-disable no-unused-expressions */
/* eslint-disable sonarjs/no-unused-expressions */
import { calculator } from './calculator';
// object that contains functions for the basic operations: add, subtract,
// divide, and multiply. Each of these functions should take two numbers and
// return the correct calculation

describe('calculator', () => {
  it('exists', () => {
    expect(calculator).toBeDefined();
  });

  it('is an object', () => {
    expect(calculator).toBeInstanceOf(Object);
  });

  it('contains add()', () => {
    expect(calculator).toHaveProperty('add');
  });
  it('contains subtract()', () => {
    expect(calculator).toHaveProperty('subtract');
  });
  it('contains multiply()', () => {
    expect(calculator).toHaveProperty('multiply');
  });
});

describe('add', () => {
  it('adds 2 numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  }),
    it('adds 2 numbers', () => {
      expect(calculator.add(10, 5)).toBe(15);
    });
});

describe('subtract', () => {
  it('subtracts num2 from num1', () => {
    expect(calculator.subtract(5, 1)).toBe(4);
  });
  it('subtracts num2 from num1', () => {
    expect(calculator.subtract(16, 4)).toBe(12);
  });
});

describe('multiply', () => {
  it('multiplies num1, num2', () => {
    expect(calculator.multiply(3, 5)).toBe(15);
  });
  it('multiplies num1, num2', () => {
    expect(calculator.multiply(44, 2)).toBe(88);
  });
});
