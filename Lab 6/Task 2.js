'use strict';

const compose = (...fns) => {
  const errorBox = [];

  const f = (x) => {
    let result = x;

    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        result = fns[i](result);
      }
      return result;
    } catch (error) {
      for (const boxError of errorBox) {
        boxError(error);
      }
      return undefined;
    }
  };

  f.on = (name, boxError) => {
    if (name === 'error' && typeof boxError === 'function') {
      errorBox.push(boxError);
    }
  };

  return f;
};

const add2 = (x) => x + 2;
const multiply3 = (x) => x * 3;
const brokenFn = () => {
  throw new Error('Something went wrong');
};

console.log(compose(add2, multiply3)(5));

const f = compose(add2, brokenFn, multiply3);
console.log(f(4));

f.on('error', (a) => {
  console.error('Stop, it is: ', a.message)
});
console.log(f(10));