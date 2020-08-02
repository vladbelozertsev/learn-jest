// Видео-урок:
// https://www.youtube.com/watch?v=IEDe8jl5efU

const expect = (val) => {
  return {
    toBe: (exp) => {
      if (val === exp) {
        console.log("success");
      } else {
        console.error(`Value is ${val}, but expectation is ${exp}`);
      }
    },
  };
};

const summ = (a, b) => a + b;

const nullFunc = () => null;

module.exports = { summ, nullFunc };

// expect(summ(30, 5)).toBe(35);
// expect(summ(30, 5)).toBe(36);
