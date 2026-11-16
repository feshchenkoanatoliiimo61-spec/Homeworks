'use strict';

const pipe = (...funcs) => {
  for (const fn of funcs) {
    if (typeof fn !== 'function') {
      throw new Error("Something isn't a function");
    }
  }

  return (x) => funcs.reduce((result, fn) => fn(result), x);
};

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f1 = pipe(inc, twice, cube);
console.log(f1(5));

const f = pipe(inc, 7, cube);
console.log(f1(5));