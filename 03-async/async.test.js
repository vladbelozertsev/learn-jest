const { Ajax } = require("./async");
const axios = require("axios");

// При помощи метода jest.mock мы можем переопределять базовое поведение
// https://jestjs.io/docs/en/jest-object
jest.mock("axios");

describe("Ajax echo", () => {
  test("should be defined", () => {
    expect(Ajax.echo).toBeDefined();
  });

  // async/await
  test("should return async value", async () => {
    const result = await Ajax.echo("my data");
    expect(result).toBe("my data");
  });

  test("should return error with promise", async () => {
    try {
      await Ajax.echo();
    } catch (err) {
      expect(err.message).toBe("error");
    }
  });

  // promise
  test("should return value with promise", () => {
    Ajax.echo("my data").then((data) => {
      expect(data).toBe("my data");
    });
  });

  test("should return error with promise", () => {
    Ajax.echo().catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  });
});

describe("Ajax get", () => {
  let response;
  let todos;

  beforeEach(() => {
    // jest автоматически создает переменные если они НЕ объявлены в замыкании
    // т.е. если закоментить let response/todos они будут созданы автоматически
    todos = [{ id: 0, title: "todo a", ready: false }];
    response = {
      data: {
        todos,
      },
    };
  });

  test("should return data from server", () => {
    axios.get.mockReturnValue(response);
    return Ajax.get().then((data) => {
      expect(data.todos).toEqual(todos);
    });
  });
});
