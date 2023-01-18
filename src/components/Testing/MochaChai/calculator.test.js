const chai = require("chai");
const expect = chai.expect;

const calculator = require("./calculator");

describe("Calculator", () => {
  describe("Addition", () => {
    it("Properly adds two numbers", () => {
      expect(calculator.add(5, 2)).to.equal(7);
      expect(calculator.add(-12, 13)).to.equal(1);
      expect(calculator.add(-3, -5)).to.equal(-8);
    });
  });

  describe("Subtraction", () => {
    it("Properly subtract two numbers", () => {
      expect(calculator.subtract(6, 2)).to.equal(4);
        expect(calculator.subtract(-10, 5)).to.equal(-15);
        expect(calculator.subtract(-8, -5)).to.equal(-3);
    });
  });

  describe("Multiplication", () => {
    it("Properly multiplies two numbers", () => {
      expect(calculator.multiply(3, 2)).to.equal(6);
      expect(calculator.multiply(-10, 5)).to.equal(-50);
      expect(calculator.multiply(-5, -2)).to.equal(10);
    });
  });

  describe("Division", () => {
    it("Properly divides two numbers", () => {
      expect(calculator.divide(4, 2)).to.equal(2);
      expect(calculator.divide(50, 6)).to.equal(8.333333333333334);
      expect(calculator.divide(-15, 2)).to.equal(-7.5);
    });
    it("Return Infinity if the denominator is zero", () => {
      expect(calculator.divide(4, 0)).to.equal(Infinity);
      expect(calculator.divide(50, 0)).to.equal(Infinity);
    });
  });
});
