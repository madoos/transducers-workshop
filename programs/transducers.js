const { map, filter, comp, transduce } = require('transducers-js');

const xf = comp(
    map(n => n * 2),
    map(n => n * n),
    filter(n => n % 2 === 0),
    map(n => n + 1)
);

const sum = (x, y) => x + y;

const program = xs => transduce(xf, sum, 0, xs);

module.exports = program;
