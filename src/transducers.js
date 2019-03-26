const { curry } = require('ramda');

const map = f => rf => (acc, val) => {
    return rf(acc, f(val));
};

const filter = predicate => rf => (acc, val) => {
    return predicate(val) ? rf(acc, val) : acc;
};

const take = (n, _taken = 0) => rf => (acc, val) => {
    return ++_taken <= n ? rf(acc, val) : acc;
};

const reduce = (f, initial, xs) => {
    let result;
    for (let item of xs[Symbol.iterator]()) {
        result = result ? f(result, item) : f(initial, item);
    }
    return result;
};

const transduce = curry((xf, rf, initial, input) => {
    return reduce(xf(rf), initial, input);
});

const sequence = (xf, xs) => {
    return transduce(xf, xs.constructor.step, xs.constructor.initial(), xs);
};

const into = (to, xf, from) => {
    return transduce(xf, to.constructor.step, to.constructor.initial(), from);
};

/*
Data structures must implement iterator protocol
and adds to constructor the methods initial and step

Set.initial = () => new Set()
Set.step = (acc, value) => acc.add(value)

Array.initial = () => []
Array.step = (acc, value) => {
  acc.push(value);
  return acc
}

*/

module.exports = {
    map,
    filter,
    take,
    transduce,
    sequence,
    into
};
