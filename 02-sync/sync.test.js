const { Lodash } = require("./sync");

let _ = new Lodash();

describe("Lodash compact", () => {
  let arr;
  // let arr = [false, 42, null, "text", undefined, "0", true, 0, ""];

  // функции beforeEach/beforeAll вызываются перед каждым/первым test(...)-кейсом соответственно
  // функции afterEach/afterAll вызываются после каждого/всех test(...)-кейсов соответственно
  // подробнее: https://jestjs.io/docs/en/api

  // создаем новое значение для arr перед каждым вызовом теста, т.к. тест может менять arr
  // https://jestjs.io/docs/en/api#beforeeachfn-timeout
  beforeEach(() => {
    arr = [false, 42, null, "text", undefined, "0", true, 0, ""];
  });

  // перезаписываем _ после отработки всех тестов
  // https://jestjs.io/docs/en/api#afterallfn-timeout
  afterAll(() => {
    _ = new Lodash();
  });

  test("should be defined", () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  // этот тест меняет значение массива arr, если бы не beforeEach, возникла бы ошибка
  test("should working array be editable", () => {
    arr.push(...["one", "two"]);
    expect(arr).toContain("one");
    expect(arr).toContain("two");
  });

  test("should remove falsy values from array", () => {
    // const arr = [false, 42, null, "text", undefined, "0", true, 0, ""];
    const result = [42, "text", "0", true];
    expect(_.compact(arr)).toEqual(result); // toEqual - для массивов (сложных значений), toBe - для простых
  });

  test("should NOT contain falsy values", () => {
    // const arr = [false, 42, null, "text", undefined, "0", true, 0, ""];
    expect(_.compact(arr)).not.toContain(false);
    expect(_.compact(arr)).not.toContain(0);
    expect(_.compact(arr)).not.toContain("");
    expect(_.compact(arr)).not.toContain(null);
  });
});

describe("Lodash groupBy", () => {
  test("should be defined", () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });

  test("should group arr items by Math.floor", () => {
    const arr = [1.5, 3.8, 2.2, 3.5, 1.7];
    const result = {
      1: [1.5, 1.7],
      2: [2.2],
      3: [3.8, 3.5],
    };
    expect(_.groupBy(arr, Math.floor)).toEqual(result);
  });

  test("should group arr items by length", () => {
    const arr = ["one", "two", "three", "four"];
    const result = {
      3: ["one", "two"],
      4: ["four"],
      5: ["three"],
    };
    expect(_.groupBy(arr, "length")).toEqual(result);
  });

  test("should NOT return array", () => {
    [expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)];
  });
});
