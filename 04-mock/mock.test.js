const { map } = require("./mock");

// https://doc.ebichu.cc/jest/docs/ru/mock-function-api.html
// Функции-имитаторы (Mock-functions) также известные как "шпионы", потому что они позволяют "шпионить"
// за поведением функции косвенно вызываемой другим кодом, а не просто тестировать результаты исполнения.
// Функцию-имитатор можно создать при помощи jest.fn(). Если реализация не предоставлена, то при
// вызове данная функция вернет значение undefined.

describe("Map function", () => {
  let arr;
  let cbSpy;
  let result;

  beforeEach(() => {
    arr = [1, 2, 3, 5];
    cbSpy = jest.fn((x) => x ** 2);
    map(arr, cbSpy);
  });

  it("should call cb", () => {
    expect(cbSpy).toBeCalled();
  });

  it("should call cbSpy 4 times", () => {
    // а и б эквивалентны:
    expect(cbSpy).toBeCalledTimes(4); // (а)
    expect(cbSpy.mock.calls.length).toBe(4); // (б)
  });

  it("should pow 2 each el", () => {
    expect(cbSpy.mock.results[0].value).toBe(1);
    expect(cbSpy.mock.results[1].value).toBe(4);
    expect(cbSpy.mock.results[2].value).toBe(9);
    expect(cbSpy.mock.results[3].value).toBe(25);
  });

  it("should cbSpy work", () => {
    cbSpy
      .mockReturnValueOnce(100)
      .mockReturnValueOnce(200)
      .mockReturnValue("cbSpy calls more than two times");
    result = map(arr, cbSpy);
    console.log(result);
    // До этого, cbSpy был вызван 4 раза в map
    expect(cbSpy()).toBe("cbSpy calls more than two times");
    expect(cbSpy()).toBe("cbSpy calls more than two times");
  });
});
