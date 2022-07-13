const calculator = require("./calculator");
describe("add numbers", () => {
  test("1 + 2 = 3", () => {
    // arrange
    const num1 = 1;
    const num2 = 2;
    // act
    const myCalculator = new calculator(num1, num2);
    const result = myCalculator.add(num1, num2);
    // assert result
    expect(result).toBe(3);
  });
});

describe("subract second number from first", () => {
  test("2 - 1 = 1", () => {
    // arrange
    const num1 = 2;
    const num2 = 1;
    // act
    const myCalculator = new calculator(num1, num2);
    const result = myCalculator.subtract(num1, num2);
    // assert result
    expect(result).toBe(1);
  });
});

describe("multiply numbers", () => {
  test("3 * 2 = 6", () => {
    // arrange
    const num1 = 3;
    const num2 = 2;
    // act
    const myCalculator = new calculator(num1, num2);
    const result = myCalculator.multiply(num1, num2);
    // assert result
    expect(result).toBe(6);
  });
});
