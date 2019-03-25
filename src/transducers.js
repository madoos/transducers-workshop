const { curry } = require('ramda');

const map = f => rf => (acc, val) => {
    return rf(acc, f(val));
};

const filter = predicate => rf => (acc, val) => {
    return predicate(val) ? rf(acc, val) : acc;
};

const into = curry((initial, xf, xs) => {
    return xs.reduce(xf, initial);
});

const transduce = curry((xf, rf, initial, input) => {
    return input.reduce(xf(rf), initial);
});

module.exports = {
    map,
    filter,
    into,
    transduce
};
