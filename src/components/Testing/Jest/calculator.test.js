const calculator = require('./calculator')

describe("Calculator", () => {
  describe("Addition", () => {
    test("Properly adds two numbers", () => {
      expect(calculator.add(1, 2)).toBe(3);
      expect(calculator.add(-5, 2)).toBe(-3);
    });
  })

  describe("Substraction", () => {
    test("Properly subtracts two numbers", () => {
      expect(calculator.subtract(1, 2)).toBe(-1);
      expect(calculator.subtract(10, 5)).toBe(5);
      expect(calculator.subtract(-3, 2)).toBe(-5);
      expect(calculator.subtract(-3, -2)).toBe(-1);
    });
  })

  describe("Multiplication", () => {
    test("Properly multiply two numbers", () => {
      expect(calculator.multiply(5, 5)).toBe(25);
      expect(calculator.multiply(5, -6)).toBe(-30);
    });
  })


  describe("Division", () => {
    test("Properly divides two numbers", () => {
      expect(calculator.divide(10, 2)).toBe(5);
      expect(calculator.divide(50, 6)).toBe(8.333333333333334);
    });

    test("Returns Infinity if denominator is 0", () => {
      expect(calculator.divide(10, 0)).toBe(Infinity);
    });
  })
});
  