const { summ, nullFunc } = require("./intro");

// describe - объеденяет логику тестирование, к примеру 1-ой функции
describe("summ", () => {
  test("should return summ of two args", () => {
    expect(summ(5, 5)).toBe(10);
    expect(summ(5, 5)).toEqual(10);
  });

  test("should return correctly relative result", () => {
    expect(summ(5, 5)).toBeGreaterThan(9);
    expect(summ(5, 5)).toBeGreaterThanOrEqual(10);
    expect(summ(5, 5)).toBeLessThan(11);
    expect(summ(5, 5)).toBeLessThanOrEqual(10);
  });

  test("should summ two float values correct", () => {
    expect(summ(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe("nullFunc", () => {
  test("should return null", () => {
    expect(nullFunc()).toBe(null);
    expect(nullFunc()).toBeNull();
    expect(nullFunc()).toBeFalsy(); // undef, null, 0, ""
    expect(nullFunc()).toBeDefined();
    expect(nullFunc()).not.toBeTruthy();
    expect(nullFunc()).not.toBeUndefined();
  });
});
